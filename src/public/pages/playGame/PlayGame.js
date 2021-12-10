import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Logo from "../../../components/logo/Logo";
import { useGame } from "../publicHomeHooks";
import { usePlayGame, useUserList } from "./playGameHooks";

const PlayGame = () => {
  const { game, setGame } = useGame();
  const { pin } = useParams();
  const playGame = usePlayGame();
  const { userName, userList } = playGame;
  const getUserList = useUserList();

  useEffect(() => {
    if (!game && pin.length > 3) setGame(pin);
  }, [game, pin, setGame]);

  useEffect(() => {
    getUserList();
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
