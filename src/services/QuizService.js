import { API, graphqlOperation } from "aws-amplify";
import { createAnswer, createQuiz, createSlide } from "../graphql/mutations";
import Quiz from "../dataObjects/Quiz";
import Slide from "../dataObjects/Slide";
import Answer from "../dataObjects/Answer";

class QuizService {
  post = async (reduxQuiz) => {
    try {
      const {
        data: {
          createQuiz: { id: quizId },
        },
      } = await API.graphql(
        graphqlOperation(createQuiz, { input: new Quiz(reduxQuiz) })
      );
      for (const reduxSlide of reduxQuiz.slides) {
        const {
          data: {
            createSlide: { id: slideId },
          },
        } = await API.graphql(
          graphqlOperation(createSlide, {
            input: new Slide(reduxSlide, quizId),
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
      return quizId;
    } catch (e) {
      console.error(e.errors[0].message, e);
    }
  };
}
export default QuizService;
