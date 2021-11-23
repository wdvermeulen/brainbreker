import { I18n } from "aws-amplify";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";

const GameTypeSelection = () => (
  <>
    <Logo />
    <div className="row">
      <Link to="./gamemaster/newquiz">
        <button className="outline big">
          {I18n.get("Setup a standard quiz")}
        </button>
      </Link>
      {/*TODO*/}
      {/*<Link to="#">*/}
      {/*  <button className="outline big">{I18n.get("Setup a pub quiz")}</button>*/}
      {/*</Link>*/}
    </div>
    <div className="row">
      {/*<Link to="#">*/}
      {/*  <button className="outline big">*/}
      {/*    {I18n.get("Setup an online escape room")}*/}
      {/*  </button>*/}
      {/*</Link>*/}
      {/*<Link to="#">*/}
      {/*  <button className="outline big">*/}
      {/*    {I18n.get("Play a solo puzzle")}*/}
      {/*  </button>*/}
      {/*</Link>*/}
    </div>
    <div className="row">
      {/*<Link to="#">*/}
      {/*  <button className="outline big">{I18n.get("Custom game")}</button>*/}
      {/*</Link>*/}
      <Link to="./gamemaster/load">
        <button className="outline big">{I18n.get("Load stored games")}</button>
      </Link>
    </div>
  </>
);

export default GameTypeSelection;