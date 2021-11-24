import { API, graphqlOperation } from "aws-amplify";
import { createAnswer, createGame, createSlide } from "../graphql/mutations";
import Game from "../dataObjects/Game";
import Slide from "../dataObjects/Slide";
import Answer from "../dataObjects/Answer";
import { listGames } from "../graphql/queries";

class GameService {
  post = async (reduxGame) => {
    try {
      const {
        data: {
          createGame: { id: gameId },
        },
      } = await API.graphql(
        graphqlOperation(createGame, { input: new Game(reduxGame) })
      );
      for (const reduxSlide of reduxGame.slides) {
        const {
          data: {
            createSlide: { id: slideId },
          },
        } = await API.graphql(
          graphqlOperation(createSlide, {
            input: new Slide(reduxSlide, gameId),
          })
        );
        for (const reduxAnswer of reduxSlide.answers) {
          await API.graphql(
            graphqlOperation(createAnswer, {
              input: new Answer(reduxAnswer, slideId),
            })
          );
        }
      }
      return gameId;
    } catch (e) {
      console.error(e.errors[0].message, e);
    }
  };
  get = async () => {
    try {
      const { data } = await API.graphql(graphqlOperation(listGames));
      console.log(data);
      return data;
    } catch (e) {
      console.error(e.errors[0].message, e);
    }
  };
}
export default GameService;
