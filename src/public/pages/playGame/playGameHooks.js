import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PeerContext } from "../../../peer/PeerConnection";
import PublicUserService from "../../services/PublicUserService";
import { addUserToList, setUserList, setUserName } from "./playGameSlice";

function usePlayGame() {
  const dispatch = useDispatch();

  return {
    userName: {
      value: useSelector((state) => state.playGame.userName),
      onChange: (e) => dispatch(setUserName(e.target.value)),
    },
    userList: useSelector((state) => state.playGame.userList),
  };
}

function useOnClickJoin() {
  const publicUserService = new PublicUserService();
  const peerContext = useContext(PeerContext);
  const gameID = useSelector((state) => state.playGame.game?.id);
  const userName = useSelector((state) => state.playGame.userName);
  const hostPeerID = useSelector((state) => state.playGame.game?.hostPeerID);
  return () => {
    publicUserService.create(userName, gameID);
    debugger;
    peerContext.connectTo(hostPeerID, userName);
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
    const subscribe = publicUserService.onCreateUser.subscribe({
      next: async ({
        value: {
          data: { onCreateUser },
        },
      }) => {
        dispatch(addUserToList(onCreateUser));
      },
      error: (error) => console.warn(error),
    });
    return subscribe.unsubscribe;
  };
}
export { usePlayGame, useOnClickJoin, useUserList, useSubscribeToUser };
