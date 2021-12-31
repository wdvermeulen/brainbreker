import { useState } from "react";
import { Box, Button, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import AutosizeInput from "react-input-autosize/lib/AutosizeInput";
import Logo from "../../components/logo/Logo";
import { styled } from "../../sharedStyles/theme";
import { url } from "../../SiteRoute";
import { useGame } from "./publicHomeHooks";

const StyledDivider = styled("div", {
  margin: "10px 0",
  display: "flex",
  alignItems: "center",
  gap: "$2",

  "&::before": {
    height: "1px",
    backgroundColor: "$lightest",
    width: "100%",
    content: "",
  },

  "&::after": {
    height: "1px",
    backgroundColor: "$lightest",
    width: "100%",
    content: "",
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
    <Box
      sx={{
        margin: "0 auto",
        flex: "1 1 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Logo />
      <Card variant="outlined">
        <CardContent>
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
          <Button
            variant="contained"
            component={Link}
            to={url.PLAY_GAME}
            disabled={!game}
            fullWidth={true}
          >
            Meespelen
          </Button>
          <StyledDivider>of</StyledDivider>
          <Button
            variant="contained"
            component={Link}
            to={url.GAME_TYPE_SELECTION}
            fullWidth={true}
          >
            Nieuw spel beginnen
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;
