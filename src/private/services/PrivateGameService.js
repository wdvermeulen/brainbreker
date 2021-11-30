import { API, graphqlOperation } from "aws-amplify";
import {
  createPrivateGame,
  deletePrivateGame,
  updatePrivateGame,
} from "../../graphql/mutations";
import {
  getPrivateGame as getPrivateGameQuery,
  listPrivateGames,
} from "../../graphql/queries";
import PrivateGame from "./dataObjects/private/PrivateGame";

class PrivateGameService {
  create = async (reduxGame) =>
    API.graphql(
      graphqlOperation(createPrivateGame, {
        input: reduxGame,
      })
    );

  read = async (gameID) => {
    if (gameID) {
      return API.graphql(graphqlOperation(getPrivateGameQuery, { id: gameID }));
    } else {
      return API.graphql(graphqlOperation(listPrivateGames));
    }
  };

  update = async (reduxGame) =>
    API.graphql(
      graphqlOperation(updatePrivateGame, {
        input: new PrivateGame(reduxGame),
      })
    );

  delete = async (id) =>
    API.graphql(graphqlOperation(deletePrivateGame, { input: { id } }));
}

export default PrivateGameService;
