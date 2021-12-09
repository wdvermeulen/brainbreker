import { useEffect } from "react";
import AutosizeInput from "react-input-autosize";
import { useParams } from "react-router-dom";
import Logo from "../../../components/logo/Logo";
import { useFormInput } from "../../../Utils";
import { useGame } from "../publicHomeHooks";
import * as adjectives from "../../../sharedResources/adjectives/dutch.json";
import * as animals from "../../../sharedResources/animals/dutch.json";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const randomName =
  adjectives.default[getRandomInt(0, adjectives.default.length + 1)] +
  " " +
  animals.default[getRandomInt(0, animals.default.length + 1)];

const PlayGame = () => {
  const { game, setGame } = useGame();
  const { pin } = useParams();
  const userName = useFormInput(randomName);

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
          {...userName}
        />
        <button className="secondary">Verder</button>
      </div>
      <div className="glass-tile center">Verbonden met: {game?.name}</div>
    </div>
  );
};

export default PlayGame;
