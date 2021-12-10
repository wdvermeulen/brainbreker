import { useDispatch, useSelector } from "react-redux";
import PublicUserService from "../../services/PublicUserService";
import { setUserList, setUserName } from "./playGameSlice";

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

  const publicUserService2 = new PublicUserService();
  return async () =>
    dispatch(setUserList(await publicUserService2.readList(gameID)));
}
export { usePlayGame, useUserList };
