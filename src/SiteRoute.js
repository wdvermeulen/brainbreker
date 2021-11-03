import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authenticated from "./Pages/Authenticated/Authenticated";
import GameTypeSelection from "./Pages/GameMaster/GameTypeSelection";
import Home from "./Pages/Home";
import NewQuiz from "./Pages/GameMaster/NewQuiz/NewQuiz";

const SiteRoute = () => (
  <Router>
    <Switch>
      <Route path="/gamemaster/new-quiz">
        <Authenticated>
          <NewQuiz />
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
