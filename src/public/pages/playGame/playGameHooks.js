import { useDispatch, useSelector } from "react-redux";
import PublicUserService from "../../services/PublicUserService";
import { addUserToList, setUserList, setUserName } from "./playGameSlice";

function usePlayGame() {
  const dispatch = useDispatch();
  const publicUserService = new PublicUserService();
  const gameID = useSelector((state) => state.playGame.game?.id);

  return {
    userName: {
      value: useSelector((state) => state.playGame.userName),
      onChange: (e) => dispatch(setUserName(e.target.value)),
      onBlur: (e) => publicUserService.create(e.target.value, gameID),
    },
    userList: useSelector((state) => state.playGame.userList),
  };
}

function useUserList() {
  const dispatch = useDispatch();
  const gameID = useSelector((state) => state.playGame.game?.id);
  const publicUserService = new PublicUserService();

  return async () =>
    dispatch(setUserList(await publicUserService.readList(gameID)));
}

function useSubscribeToUser() {
  const dispatch = useDispatch();
  // const gameID = useSelector((state) => state.playGame.game?.id);
  const publicUserService = new PublicUserService();

  return async () => {
    console.log("subscribing");
    const subscribe = publicUserService.onCreateUser.subscribe({
      next: async ({
        value: {
          data: { onCreateUser },
        },
      }) => {
        dispatch(addUserToList(onCreateUser));
        console.log(onCreateUser);
      },
      error: (error) => console.warn(error),
    });
    console.log(subscribe);
    return subscribe.unsubscribe;
  };
}
export { usePlayGame, useUserList, useSubscribeToUser };
