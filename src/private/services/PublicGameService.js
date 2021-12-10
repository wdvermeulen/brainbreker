import { API, graphqlOperation } from "aws-amplify";
import { createPublicGame } from "../../graphql/mutations";
import { publicGameByPrivateGameID } from "../../graphql/queries";
import PublicGame from "./dataObjects/public/PublicGame";

class PublicGameService {
  #hasPinBeenRejected = (e) =>
    e.errors[0].errorType === "DynamoDB:ConditionalCheckFailedException";

  create = async (reduxGame) => {
    for (let tries = 0; tries < 10; tries++) {
      try {
        const {
          data: {
            createPublicGame: { pin },
          },
        } = await API.graphql({
          ...graphqlOperation(createPublicGame, {
            input: new PublicGame(reduxGame),
          }),
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        return pin;
      } catch (e) {
        if (!this.#hasPinBeenRejected(e)) {
          throw e;
        }
      }
    }
    throw new Error("Unable to create a valid pin.");
  };

  readByPrivateGameID = async (gameID) => {
    const {
      data: {
        publicGameByPrivateGameID: { items },
      },
    } = await API.graphql({
      ...graphqlOperation(publicGameByPrivateGameID, {
        privategameID: gameID,
      }),
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    return items[0];
  };
}

export default PublicGameService;
