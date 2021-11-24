import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authenticated from "./authenticated/Authenticated";
import GameTypeSelection from "../pages/private/GameTypeSelection";
import Home from "../pages/Home";
import NewGame from "../pages/private/newGame/NewGame";
import Load from "../pages/private/load/Load";

const SiteRoute = () => (
  <Router>
    <Switch>
      <Route path="/gamemaster/newgame">
        <Authenticated>
          <NewGame />
        </Authenticated>
      </Route>
      <Route path="/gamemaster/load">
        <Authenticated>
          <Load />
        </Authenticated>
      </Route>
      <Route path="/gamemaster/game/:gameId">
        <Authenticated>
          <Load />
        </Authenticated>
      </Route>
      <Route path="/gamemaster">
        <Authenticated>
          <GameTypeSelection />
        </Authenticated>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default SiteRoute;
