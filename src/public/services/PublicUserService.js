import { API, graphqlOperation } from "aws-amplify";
import { createUser } from "../../graphql/mutations";
import { listUsers } from "../../graphql/queries";

class PublicUserService {
  create = async (name, gameID) => {
    const {
      data: {
        createUser: { id },
      },
    } = await API.graphql({
      ...graphqlOperation(createUser, {
        input: { name, publicgameID: gameID },
      }),
      authMode: "API_KEY",
    });
    return id;
  };
  readList = async (gameID) => {
    const {
      data: {
        listUsers: { items },
      },
    } = await API.graphql({
      ...graphqlOperation(listUsers, {
        filter: { publicgameID: { eq: gameID } },
      }),
    });
    return items;
  };
}

export default PublicUserService;
