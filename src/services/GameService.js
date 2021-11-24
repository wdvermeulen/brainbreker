import { API, graphqlOperation } from "aws-amplify";
import {
  createAnswer,
  createGame,
  createPage,
  deleteGame,
  updateAnswer,
  updateGame,
  updatePage,
} from "../graphql/mutations";
import Game from "../dataObjects/Game";
import Page from "../dataObjects/Page";
import Answer from "../dataObjects/Answer";
import { getGame, listGames } from "../graphql/queries";

class GameService {
  #mutate = async (reduxGame, mutateGame, mutatePage, mutateAnswer) => {
    try {
      const {
        data: {
          createGame: { id: gameId },
        },
      } = await API.graphql(
        graphqlOperation(mutateGame, { input: new Game(reduxGame) })
      );
      for (const reduxPage of reduxGame.pages) {
        const {
          data: {
            createSlide: { id: pageId },
          },
        } = await API.graphql(
          graphqlOperation(mutatePage, {
            input: new Page(reduxPage, gameId),
          })
        );
        for (const reduxAnswer of reduxPage.answers) {
          await API.graphql(
            graphqlOperation(mutateAnswer, {
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

  create = async (reduxGame) => {
    return this.#mutate(reduxGame, createGame, createPage, createAnswer);
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
    return this.#mutate(reduxGame, updateGame, updatePage, updateAnswer);
  };

  delete = async (gameID) => {
    try {
      await API.graphql(
        graphqlOperation(deleteGame, { input: { id: gameID } })
      );
      return gameID;
    } catch (e) {
      console.error(e.errors[0].message, e);
    }
  };
}

export default GameService;
