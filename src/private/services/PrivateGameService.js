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
import { getPrivateGame, listPrivateGames } from "../../graphql/queries";
import GqlGame from "./dataObjects/gql/GqlGame";
import GqlPage from "./dataObjects/gql/GqlPage";
import GqlAnswer from "./dataObjects/gql/GqlAnswer";

class PrivateGameService {
  create = async (reduxGame) => {
    console.log(reduxGame);
    console.log(new GqlGame(reduxGame));
    try {
      const {
        data: {
          createPrivateGame: { id: gameId },
        },
      } = await API.graphql(
        graphqlOperation(createPrivateGame, {
          input: new GqlGame(reduxGame),
        })
      );
      for (const reduxPage of reduxGame.pages) {
        console.log(reduxPage);
        console.log(new GqlPage(reduxPage, gameId));
        const {
          data: {
            createPrivatePage: { id: pageId },
          },
        } = await API.graphql(
          graphqlOperation(createPrivatePage, {
            input: new GqlPage(reduxPage, gameId),
          })
        );
        for (const reduxAnswer of reduxPage.answers) {
          await API.graphql(
            graphqlOperation(createPrivateAnswer, {
              input: new GqlAnswer(reduxAnswer, pageId),
            })
          );
        }
      }
      console.log(gameId);
      return gameId;
    } catch (e) {
      console.error(e.errors[0].message, e);
    }
  };

  read = async (gameID) => {
    try {
      const { data } = gameID
        ? await API.graphql(graphqlOperation(getPrivateGame, { id: gameID }))
        : await API.graphql(graphqlOperation(listPrivateGames));
      // return new ReduxGame(data);
      console.log(data);
      return data;
    } catch (e) {
      console.error(e.errors[0].message, e);
    }
  };

  update = async (reduxGame) => {
    try {
      const {
        data: {
          updatePrivateGame: { id: gameId },
        },
      } = await API.graphql(
        graphqlOperation(updatePrivateGame, {
          input: new GqlGame(reduxGame),
        })
      );
      for (const reduxPage of reduxGame.pages) {
        const {
          data: {
            updatePrivatePage: { id: pageId },
          },
        } = await API.graphql(
          graphqlOperation(updatePrivatePage, {
            input: new GqlPage(reduxPage, gameId),
          })
        );
        for (const reduxAnswer of reduxPage.answers) {
          await API.graphql(
            graphqlOperation(updatePrivateAnswer, {
              input: new GqlAnswer(reduxAnswer, pageId),
            })
          );
        }
      }
      return gameId;
    } catch (e) {
      console.error(e.errors[0].message, e);
    }
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
