import "./Home.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AutosizeInput from "react-input-autosize/lib/AutosizeInput";
import Logo from "../../components/logo/Logo";
import { url } from "../../SiteRoute";
import { useGame } from "./publicHomeHooks";

const Home = () => {
  const [pin, setPin] = useState("");
  const { game, setGame } = useGame();

  useEffect(() => {
    if (pin.length > 3) setGame(pin);
  }, [pin, setGame]);

  function onChangePin(event) {
    setPin(event.target.value);
  }

  return (
    <div id="home">
      <Logo />
      <div className="glass-tile center">
        <div>Startcode</div>
        <form action={`/q/${pin}`}>
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
          <button type="submit" disabled={game === null}>
            Meespelen
          </button>
        </form>
        <div className="or">of</div>
        <Link to={url.GAME_TYPE_SELECTION}>
          <button type="button">Nieuw spel beginnen</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
