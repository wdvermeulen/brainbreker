import { API, graphqlOperation } from "aws-amplify";
import { createUser } from "../../graphql/mutations";
import { listUsers } from "../../graphql/queries";
import { onCreateUser as subOnCreateUser } from "../../graphql/subscriptions";

class PublicUserService {
  create = async (name, gameID) => {
    const {
      data: {
        createUser: { id },
      },
    } = await API.graphql(
      graphqlOperation(createUser, {
        input: { name, publicgameID: gameID },
      })
    );
    return id;
  };
  readList = async (gameID) => {
    const {
      data: {
        listUsers: { items },
      },
    } = await API.graphql(
      graphqlOperation(listUsers, {
        filter: { publicgameID: { eq: gameID } },
      })
    );
    return items;
  };
  onCreateUser = API.graphql(graphqlOperation(subOnCreateUser));
}

export default PublicUserService;
