import "./Home.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import AutosizeInput from "react-input-autosize/lib/AutosizeInput";
import Logo from "../../components/logo/Logo";
import { url } from "../../SiteRoute";
import { useGame } from "./publicHomeHooks";

const Home = () => {
  const [pin, setPin] = useState("");
  const { game, setGame } = useGame();

  function onChangePin(event) {
    const value = event.target.value;
    setPin(value);
    if (value.length > 3) setGame(value);
  }

  return (
    <div id="home">
      <Logo />
      <div className="glass-tile center">
        <div>Startcode</div>
        <AutosizeInput
          type="text"
          placeholder="____"
          maxLength={4}
          minLength={4}
          size={4}
          value={pin}
          onChange={onChangePin}
        />
        <br />
        <Link to={url.PLAY_GAME} disabled={!game}>
          <button>Meespelen</button>
        </Link>
        <div className="or">of</div>
        <Link to={url.GAME_TYPE_SELECTION}>
          <button type="button">Nieuw spel beginnen</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
