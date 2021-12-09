import { API, graphqlOperation } from "aws-amplify";
import { createPublicGame, createUserList } from "../../graphql/mutations";
import { publicGameByPrivateGameID } from "../../graphql/queries";
import PublicGame from "./dataObjects/public/PublicGame";

class PublicGameService {
  #hasPinBeenRejected = (e) =>
    e.errors[0].errorType === "DynamoDB:ConditionalCheckFailedException";

  create = async (reduxGame) => {
    for (let tries = 0; tries < 10; tries++) {
      const {
        data: {
          createUserList: { id: publicGameUserListId },
        },
      } = await API.graphql({
        ...graphqlOperation(createUserList, { input: {} }),
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
      try {
        console.log("publicGameUserListId", publicGameUserListId);
        const {
          data: {
            createPublicGame: { pin },
          },
        } = await API.graphql({
          ...graphqlOperation(createPublicGame, {
            input: new PublicGame(reduxGame, publicGameUserListId),
          }),
          authMode: "AMAZON_COGNITO_USER_POOLS",
        });
        console.log(pin);
        return pin;
      } catch (e) {
        if (!this.#hasPinBeenRejected(e)) {
          console.log(e);
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
