import { useEffect } from "react";
import AutosizeInput from "react-input-autosize";
import { useParams } from "react-router-dom";
import Logo from "../../../components/logo/Logo";
import { useGame } from "../publicHomeHooks";

const PlayGame = () => {
  const { game, setGame } = useGame();
  const { pin } = useParams();

  useEffect(() => {
    if (!game && pin.length > 3) setGame(pin);
  }, [game, pin, setGame]);

  return (
    <div id="home">
      <Logo />
      <div className="glass-tile center">
        <div>Startcode</div>
        <label htmlFor="nameInput">Uw naam: </label>
        <AutosizeInput
          id="nameInput"
          type="text"
          maxLength={64}
          minLength={1}
        />
        <button className="secondary">Verder</button>
      </div>
      <div className="glass-tile center">Verbonden met: {game?.name}</div>
    </div>
  );
};

export default PlayGame;
