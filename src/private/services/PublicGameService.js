import { API, graphqlOperation } from "aws-amplify";
import { createPublicGame } from "../../graphql/mutations";
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
        } = await API.graphql(
          graphqlOperation(createPublicGame, {
            input: new PublicGame(reduxGame),
          })
        );
        return pin;
      } catch (e) {
        if (!this.#hasPinBeenRejected(e)) {
          console.error(e.errors[0].message, e);
          return 0;
        }
      }
    }
  };
}

export default PublicGameService;
