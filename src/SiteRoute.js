import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authenticated from "./Pages/Authenticated/Authenticated";
import GameTypeSelection from "./Pages/GameMaster/GameTypeSelection";
import Root from "./Pages/Root";
import NewQuiz from "./Pages/GameMaster/NewQuiz";

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
        <Root />
      </Route>
    </Switch>
  </Router>
);

export default SiteRoute;
