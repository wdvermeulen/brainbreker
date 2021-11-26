import { API, graphqlOperation } from "aws-amplify";
import {
  createAnswer,
  createGame,
  createPage,
  deleteAnswer,
  deleteGame,
  deletePage,
  updateAnswer,
  updateGame,
  updatePage,
} from "../graphql/mutations";
import Game from "../dataObjects/Game";
import Page from "../dataObjects/Page";
import Answer from "../dataObjects/Answer";
import { getGame, listGames } from "../graphql/queries";

class GameService {
  create = async (reduxGame) => {
    try {
      const {
        data: {
          createGame: { id: gameId },
        },
      } = await API.graphql(
        graphqlOperation(createGame, { input: new Game(reduxGame) })
      );
      for (const reduxPage of reduxGame.pages) {
        const {
          data: {
            createPage: { id: pageId },
          },
        } = await API.graphql(
          graphqlOperation(createPage, {
            input: new Page(reduxPage, gameId),
          })
        );
        for (const reduxAnswer of reduxPage.answers) {
          await API.graphql(
            graphqlOperation(createAnswer, {
              input: new Answer(reduxAnswer, pageId),
            })
          );
        }
      }
      return gameId;
    } catch (e) {
      console.error(e.errors[0].message, e);
    }
  };

  read = async (gameID) => {
    try {
      const { data } = gameID
        ? await API.graphql(
            graphqlOperation(getGame, { input: { id: gameID } })
          )
        : await API.graphql(graphqlOperation(listGames));
      return data;
    } catch (e) {
      console.error(e.errors[0].message, e);
    }
  };

  update = async (reduxGame) => {
    try {
      const {
        data: {
          updateGame: { id: gameId },
        },
      } = await API.graphql(
        graphqlOperation(updateGame, { input: new Game(reduxGame) })
      );
      for (const reduxPage of reduxGame.pages) {
        const {
          data: {
            updatePage: { id: pageId },
          },
        } = await API.graphql(
          graphqlOperation(updatePage, {
            input: new Page(reduxPage, gameId),
          })
        );
        for (const reduxAnswer of reduxPage.answers) {
          await API.graphql(
            graphqlOperation(updateAnswer, {
              input: new Answer(reduxAnswer, pageId),
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
        graphqlOperation(deleteGame, { input: { id: reduxGame.gameId } })
      );
      for (const reduxPage of reduxGame.pages) {
        await API.graphql(
          graphqlOperation(deletePage, {
            input: { id: reduxPage.pageId },
          })
        );
        for (const reduxAnswer of reduxPage.answers) {
          await API.graphql(
            graphqlOperation(deleteAnswer, {
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

export default GameService;
