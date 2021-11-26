import { I18n } from "aws-amplify";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import { url } from "../../app/SiteRoute";

const GameTypeSelection = () => (
  <>
    <Logo />
    <div className="row">
      <Link to={url.NEW_GAME}>
        <button className="outline big">
          {I18n.get("Setup a standard game")}
        </button>
      </Link>
      {/*TODO*/}
      {/*<Link to="#">*/}
      {/*  <button className="outline big">{I18n.get("Setup a pub game")}</button>*/}
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
      <Link to={url.GAMES}>
        <button className="outline big">{I18n.get("Load stored games")}</button>
      </Link>
    </div>
  </>
);

export default GameTypeSelection;
