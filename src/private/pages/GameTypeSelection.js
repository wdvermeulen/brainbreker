import { I18n } from "aws-amplify";
import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import { url } from "../../SiteRoute";

const GameTypeSelection = () => (
  <>
    <Logo />
    <div className="row">
      <div className="glass-tile">
        <p>Een snelle quiz met meerkeuzevragen.</p>
        <Link to={url.NEW_GAME}>
          <button className="outline">
            {I18n.get("Setup a standard game")}
          </button>
        </Link>
      </div>
      <div className="glass-tile">
        <p>
          Een pubquiz opgedeeld in gedeeltes met open vragen. Antwoorden worden
          achteraf met de hand gecontroleerd.
        </p>
        {/*<Link to={url.NEW_GAME}>*/}
        {/*  <button className="outline">{I18n.get("Setup a pub game")}</button>*/}
        {/*</Link>*/}
      </div>
    </div>
    <div className="row">
      <div className="glass-tile">
        <p>
          Spel waarin teams raadsels, puzzels en opdrachten moeten doen om tot
          het einde te komen.
        </p>
        {/*<Link to="#">*/}
        {/*  <button className="outline">*/}
        {/*    {I18n.get("Setup an online escape room")}*/}
        {/*  </button>*/}
        {/*</Link>*/}
      </div>
      <div className="glass-tile">
        <p>Speel solo en kies jouw puzzel uit de marktplaats.</p>
        {/*<Link to="#">*/}
        {/*  <button className="outline">*/}
        {/*    {I18n.get("Play a solo puzzle")}*/}
        {/*  </button>*/}
        {/*</Link>*/}
      </div>
    </div>
    <div className="row">
      <div className="glass-tile">
        <p>Complete vrijheid om jouw spel te maken.</p>
        {/*<Link to="#">*/}
        {/*  <button className="outline">{I18n.get("Custom game")}</button>*/}
        {/*</Link>*/}
      </div>
      <div className="glass-tile">
        <p>Ga naar een overzicht van door jou opgeslagen spellen.</p>
        <Link to={url.GAMES}>
          <button className="outline">{I18n.get("Load stored games")}</button>
        </Link>
      </div>
    </div>
  </>
);

export default GameTypeSelection;
