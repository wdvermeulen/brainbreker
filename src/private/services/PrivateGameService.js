import { API, graphqlOperation } from "aws-amplify";
import {
  createPrivateAnswer,
  createPrivateGame,
  createPrivatePage,
  deletePrivateAnswer,
  deletePrivateGame,
  deletePrivatePage,
  updatePrivateAnswer,
  updatePrivateGame,
  updatePrivatePage,
} from "../../graphql/mutations";
import {
  getPrivateGame as getPrivateGameQuery,
  listPrivateGames,
} from "../../graphql/queries";
import GqlGame from "./dataObjects/gql/GqlGame";
import GqlPage from "./dataObjects/gql/GqlPage";
import GqlAnswer from "./dataObjects/gql/GqlAnswer";

class PrivateGameService {
  #getID = (data) => {
    return data[Object.keys(data)[0]].id;
  };

  #mutate = async (mutateGame, mutatePage, mutateAnswer, reduxGame) => {
    try {
      const { data } = await API.graphql(
        graphqlOperation(mutateGame, {
          input: new GqlGame(reduxGame),
        })
      );
      const gameID = this.#getID(data);
      for (const reduxPage of reduxGame.pages) {
        console.log(reduxPage);
        console.log(new GqlPage(reduxPage, gameID));
        const { data } = await API.graphql(
          graphqlOperation(mutatePage, {
            input: new GqlPage(reduxPage, gameID),
          })
        );
        const pageID = this.#getID(data);
        for (const reduxAnswer of reduxPage.answers) {
          await API.graphql(
            graphqlOperation(mutateAnswer, {
              input: new GqlAnswer(reduxAnswer, pageID),
            })
          );
        }
      }
      console.log(gameID);
      return gameID;
    } catch (e) {
      console.error(e.errors[0].message, e);
    }
  };

  create = async (reduxGame) => {
    return this.#mutate(
      createPrivateGame,
      createPrivatePage,
      createPrivateAnswer,
      reduxGame
    );
  };

  read = async (gameID) => {
    try {
      if (gameID) {
        const {
          data: { getPrivateGame },
        } = await API.graphql(
          graphqlOperation(getPrivateGameQuery, { id: gameID })
        );

        return getPrivateGame;
      } else {
        const {
          data: {
            listPrivateGames: { list },
          },
        } = await API.graphql(graphqlOperation(listPrivateGames));
        return list;
      }
    } catch (e) {
      console.error(e.errors[0].message, e);
    }
  };

  update = async (reduxGame) => {
    return this.#mutate(
      updatePrivateGame,
      updatePrivatePage,
      updatePrivateAnswer,
      reduxGame
    );
  };

  delete = async (reduxGame) => {
    try {
      await API.graphql(
        graphqlOperation(deletePrivateGame, { input: { id: reduxGame.gameId } })
      );
      for (const reduxPage of reduxGame.pages) {
        await API.graphql(
          graphqlOperation(deletePrivatePage, {
            input: { id: reduxPage.pageId },
          })
        );
        for (const reduxAnswer of reduxPage.answers) {
          await API.graphql(
            graphqlOperation(deletePrivateAnswer, {
              input: { id: reduxAnswer.answerId },
            })
          );
        }
      }
      return reduxGame.gameId;
    } catch (e) {
      console.error(e.errors[0].message, e);
    }
  };
}

export default PrivateGameService;
