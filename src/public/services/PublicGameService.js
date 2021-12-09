import { API, graphqlOperation } from "aws-amplify";
import { publicGameByPin } from "../../graphql/queries";

class PublicGameService {
  read = async (pin) => {
    try {
      const {
        data: {
          publicGameByPin: { items },
        },
      } = await API.graphql(
        graphqlOperation(publicGameByPin, {
          pin,
        })
      );
      return items[0];
    } catch (e) {
      console.error("PublicGameService.read error", e);
    }
  };
}

export default PublicGameService;
