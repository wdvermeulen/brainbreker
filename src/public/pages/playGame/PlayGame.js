import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Logo from "../../../components/logo/Logo";
import { useGame } from "../publicHomeHooks";
import { usePlayGame, useSubscribeToUser, useUserList } from "./playGameHooks";

const getData = async (game, pin, setGame, userList, getUserList) => {
  console.log((!game || game.pin !== pin) && pin.length > 3, game?.pin, pin);
  if ((!game || game.pin.toString() !== pin) && pin.length > 3)
    await setGame(pin);
  if (userList.length === 0) await getUserList();
};

const PlayGame = () => {
  const { game, setGame } = useGame();
  const { pin } = useParams();
  const playGame = usePlayGame();
  const { userName, userList } = playGame;
  const getUserList = useUserList();
  const subscribeToUser = useSubscribeToUser();

  useEffect(() => {
    getData(game, pin, setGame, userList, getUserList);
  }, [game, pin, setGame, userList, getUserList]);

  useEffect(() => {
    return subscribeToUser();
  }, []);

  return (
    <div id="home">
      <Logo />
      <div className="glass-tile center">
        <div>
          <label htmlFor="nameInput">Uw gebruikersnaam: </label>
        </div>
        <input
          id="nameInput"
          type="text"
          maxLength={64}
          minLength={1}
          {...userName}
        />
      </div>
      <div className="glass-tile center">
        <div>Verbonden met: {game?.name}</div>
        {userList && (
          <ol>
            {userList.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default PlayGame;
