import { API, graphqlOperation } from "aws-amplify";
import { getPublicGame as getPublicGameQuery } from "../../graphql/queries";

class PublicGameService {
  read = async (pin) => {
    try {
      const {
        data: { getPublicGame },
      } = await API.graphql(
        graphqlOperation(getPublicGameQuery, {
          pin,
        })
      );
      return getPublicGame;
    } catch (e) {
      console.error(e.errors[0].message, e);
    }
  };
}

export default PublicGameService;
