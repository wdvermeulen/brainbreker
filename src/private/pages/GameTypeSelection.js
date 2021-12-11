import { I18n } from "aws-amplify";
import { Link } from "react-router-dom";
import Col from "../../components/Col";
import Logo from "../../components/logo/Logo";
import Row from "../../components/Row";
import { url } from "../../SiteRoute";

const GameTypeSelection = () => (
  <Col>
    <Logo />
    <Row>
      <Col className="glass-tile">
        <p>Een snelle quiz met meerkeuzevragen.</p>
        <Link to={url.NEW_GAME}>
          <button className="outline">
            {I18n.get("Setup a standard game")}
          </button>
        </Link>
      </Col>
      <Col className="glass-tile">
        <p>
          Een pubquiz opgedeeld in gedeeltes met open vragen. Antwoorden worden
          achteraf met de hand gecontroleerd.
        </p>
        {/*<Link to={url.NEW_GAME}>*/}
        {/*  <button className="outline">{I18n.get("Setup a pub game")}</button>*/}
        {/*</Link>*/}
      </Col>
    </Row>
    <Row>
      <Col className="glass-tile">
        <p>
          Spel waarin teams raadsels, puzzels en opdrachten moeten doen om tot
          het einde te komen.
        </p>
        {/*<Link to="#">*/}
        {/*  <button className="outline">*/}
        {/*    {I18n.get("Setup an online escape room")}*/}
        {/*  </button>*/}
        {/*</Link>*/}
      </Col>
      <Col className="glass-tile">
        <p>Speel solo en kies jouw puzzel uit de marktplaats.</p>
        {/*<Link to="#">*/}
        {/*  <button className="outline">*/}
        {/*    {I18n.get("Play a solo puzzle")}*/}
        {/*  </button>*/}
        {/*</Link>*/}
      </Col>
    </Row>
    <Row>
      <Col className="glass-tile">
        <p>Complete vrijheid om jouw spel te maken.</p>
        {/*<Link to="#">*/}
        {/*  <button className="outline">{I18n.get("Custom game")}</button>*/}
        {/*</Link>*/}
      </Col>
      <Col className="glass-tile">
        <p>Ga naar een overzicht van door jou opgeslagen spellen.</p>
        <Link to={url.GAMES}>
          <button className="outline">{I18n.get("Load stored games")}</button>
        </Link>
      </Col>
    </Row>
  </Col>
);

export default GameTypeSelection;
