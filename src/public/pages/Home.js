import { styled } from "@stitches/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AutosizeInput from "react-input-autosize/lib/AutosizeInput";
import Logo from "../../components/logo/Logo";
import { url } from "../../SiteRoute";
import { useGame } from "./publicHomeHooks";

const StyledHome = styled("div", {
  flex: "1 1 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",

  button: {
    width: "100%",
    marginLeft: "0",
    marginRight: "0",
  },

  ".or": {
    margin: "10px 0",
    display: "flex",
    alignItems: "center",
    gap: "10px",

    "&::before": {
      height: "1px",
      backgroundColor: "white",
      width: "100%",
      content: "",
    },

    "&::after": {
      height: "1px",
      backgroundColor: "white",
      width: "100%",
      content: "",
    },
  },
});

function onChangePin(setPin, setGame, event) {
  const value = event.target.value;
  setPin(value);
  if (value.length > 3) setGame(value);
}

const Home = () => {
  const [pin, setPin] = useState("");
  const { game, setGame } = useGame();

  return (
    <StyledHome>
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
          onChange={onChangePin.bind(null, setPin, setGame)}
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
    </StyledHome>
  );
};

export default Home;
