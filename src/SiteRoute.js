import { BrowserRouter, Route, Switch } from "react-router-dom";
import Authenticated from "./private/authenticated/Authenticated";
import EditPage from "./private/pages/editGame/EditPage";
import Games from "./private/pages/games/games";
import GameTypeSelection from "./private/pages/GameTypeSelection";
import NewGame from "./private/pages/editGame/NewGame";
import Home from "./public/pages/Home";
import PlayGame from "./public/pages/playGame/PlayGame";

export const url = {
  HOME: "/",
  NEW_GAME: "/gamemaster/newgame",
  EDIT_GAME_LOBBY: "/gamemaster/editgame/:gameID",
  EDIT_GAME_PAGE: "/gamemaster/editgame/:gameID/:currentPage",
  GAMES: "/gamemaster/games",
  GAME_TYPE_SELECTION: "/gamemaster",
  PLAY_GAME: "/q/:pin",
};

const SiteRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route path={url.EDIT_GAME_PAGE}>
        <Authenticated>
          <EditPage />
        </Authenticated>
      </Route>
      <Route path={url.EDIT_GAME_LOBBY}>
        <Authenticated>
          <EditPage />
        </Authenticated>
      </Route>
      <Route path={url.NEW_GAME}>
        <Authenticated>
          <NewGame />
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
      <Route path={url.PLAY_GAME}>
        <PlayGame />
      </Route>
      <Route exact path={url.HOME}>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default SiteRoute;
