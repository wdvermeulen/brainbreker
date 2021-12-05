import { API, graphqlOperation } from "aws-amplify";
import { createPublicGame } from "../../graphql/mutations";
import PublicGame from "./dataObjects/public/PublicGame";

class PublicGameService {
  #hasPinBeenRejected = (e) =>
    e.errors[0].errorType === "DynamoDB:ConditionalCheckFailedException";

  create = async (reduxGame) => {
    for (let tries = 0; tries < 10; tries++) {
      try {
        console.log("pin");
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
}

export default PublicGameService;
