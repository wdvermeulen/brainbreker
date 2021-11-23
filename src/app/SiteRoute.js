import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authenticated from "./authenticated/Authenticated";
import GameTypeSelection from "../pages/loggedIn/GameTypeSelection";
import Home from "../pages/Home";
import NewGame from "../pages/loggedIn/newGame/NewGame";

const SiteRoute = () => (
  <Router>
    <Switch>
      <Route path="/gamemaster/new-quiz">
        <Authenticated>
          <NewGame />
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
