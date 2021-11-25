import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom";
import Authenticated from "./authenticated/Authenticated";
import GameTypeSelection from "../pages/private/GameTypeSelection";
import Home from "../pages/Home";
import EditGame from "../pages/private/editGame/EditGame";
import Games from "../pages/private/games/games";

export const url = {
  HOME: "/",
  NEW_GAME: "/gamemaster/editgame",
  EDIT_GAME: "/gamemaster/editgame/",
  GAMES: "/gamemaster/games",
  GAME: "/gamemaster/game/",
  GAME_TYPE_SELECTION: "/gamemaster",
};

const SiteRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route path={`${url.EDIT_GAME}:gameId`}>
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
      <Route path={`${url.GAME}:gameId`}>
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
