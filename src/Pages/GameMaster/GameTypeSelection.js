import { I18n } from "aws-amplify";
import { Link } from "react-router-dom";

const GameTypeSelection = () => (
  <>
    <h1>Quizzish</h1>
    <Link to="./gamemaster/new-quiz">
      <button className="button">
        {I18n.get("SetupButton a standard quiz")}
      </button>
    </Link>
    <Link to="#">
      <button>{I18n.get("SetupButton a pub quiz")}</button>
    </Link>
    <Link to="#">
      <button>{I18n.get("SetupButton an online escape room")}</button>
    </Link>
    <Link to="#">
      <button>{I18n.get("Play a solo puzzle")}</button>
    </Link>
    <Link to="#">
      <button>{I18n.get("Custom game")}</button>
    </Link>
    <Link to="#">
      <button>{I18n.get("Load stored games")}</button>
    </Link>
  </>
);

export default GameTypeSelection;
