import "./Home.scss";
import { Link } from "react-router-dom";
import AutosizeInput from "react-input-autosize/lib/AutosizeInput";
import Logo from "../../components/logo/Logo";
import { url } from "../../SiteRoute";

const Home = () => (
  <div id="home">
    <Logo />
    <div className="glass-tile center">
      <div>Startcode</div>
      <form action="/">
        <AutosizeInput
          type="text"
          placeholder="____"
          maxLength={4}
          minLength={4}
          size={4}
        />
        <br />
        {/*TODO*/}
        <button type="submit">Meespelen</button>
      </form>
      <div className="or">of</div>
      <Link to={url.GAME_TYPE_SELECTION}>
        <button type="button">Nieuw spel beginnen</button>
      </Link>
    </div>
  </div>
);

export default Home;
