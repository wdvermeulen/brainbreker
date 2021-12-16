import { BrowserRouter, Route, Switch } from "react-router-dom";
import Authenticated from "./private/authenticated/Authenticated";
import EditGame from "./private/pages/editGame/EditGame";
import Games from "./private/pages/games/games";
import GameTypeSelection from "./private/pages/GameTypeSelection";
import HostGame from "./private/pages/hostGame/HostGame";
import Home from "./public/pages/Home";
import PlayGame from "./public/pages/playGame/PlayGame";
import PeerConnection from "./peer/PeerConnection";

export const url = {
  HOME: "/",
  NEW_GAME: "/gamemaster/editgame",
  EDIT_GAME: "/gamemaster/editgame/",
  HOST_GAME: "/gamemaster/hostgame/",
  GAMES: "/gamemaster/games",
  GAME_TYPE_SELECTION: "/gamemaster",
  PLAY_GAME: "/q/",
};

const SiteRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route path={`${url.EDIT_GAME}:gameID`}>
        <Authenticated>
          <EditGame />
        </Authenticated>
      </Route>
      <Route path={url.NEW_GAME}>
        <Authenticated>
          <EditGame />
        </Authenticated>
      </Route>
      <Route path={url.GAMES}>
        <Authenticated>
          <Games />
        </Authenticated>
      </Route>
      <Route path={`${url.HOST_GAME}:gameID`}>
        <Authenticated>
          <HostGame />
        </Authenticated>
      </Route>
      <Route path={url.GAME_TYPE_SELECTION}>
        <Authenticated>
          <GameTypeSelection />
        </Authenticated>
      </Route>
      <Route path={`${url.PLAY_GAME}:pin`}>
        <Authenticated>
          <PlayGame />
        </Authenticated>
      </Route>
      <Route exact path={url.HOME}>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default SiteRoute;
