import { BrowserRouter, Route, Switch } from "react-router-dom";
import Authenticated from "./private/authenticated/Authenticated";
import EditGame from "./private/pages/editGame/EditGame";
import Games from "./private/pages/games/games";
import GameTypeSelection from "./private/pages/GameTypeSelection";
import Home from "./public/pages/Home";

export const url = {
  HOME: "/",
  NEW_GAME: "/gamemaster/editgame",
  EDIT_GAME: "/gamemaster/editgame/",
  GAMES: "/gamemaster/games",
  GAME_TYPE_SELECTION: "/gamemaster",
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
      <Route path={url.GAME_TYPE_SELECTION}>
        <Authenticated>
          <GameTypeSelection />
        </Authenticated>
      </Route>
      <Route exact path={url.HOME}>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default SiteRoute;
