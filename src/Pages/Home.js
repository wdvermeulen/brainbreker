import "./Home.scss";
import { Link } from "react-router-dom";
import AutosizeInput from "react-input-autosize/lib/AutosizeInput";
import Logo from "../Components/Logo";

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
        <button type="submit">Meespelen</button>
      </form>
      <div className="or">of</div>
      <Link to="/gamemaster">
        <button type="button">Nieuw spel beginnen</button>
      </Link>
    </div>
  </div>
);

export default Home;
