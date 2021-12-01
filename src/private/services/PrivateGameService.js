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
  create = async (reduxGame) => {
    return API.graphql({
      ...graphqlOperation(createPrivateGame, {
        input: new PrivateGame(reduxGame),
      }),
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
  };

  read = async (id) => {
    if (id) {
      return API.graphql({
        ...graphqlOperation(getPrivateGameQuery, { id }),
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
    } else {
      return API.graphql({
        ...graphqlOperation(listPrivateGames),
        authMode: "AMAZON_COGNITO_USER_POOLS",
      });
    }
  };

  update = async (reduxGame) =>
    API.graphql({
      ...graphqlOperation(updatePrivateGame, {
        input: new PrivateGame(reduxGame),
      }),
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });

  delete = async (id) =>
    API.graphql({
      ...graphqlOperation(deletePrivateGame, { input: { id } }),
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
}

export default PrivateGameService;
