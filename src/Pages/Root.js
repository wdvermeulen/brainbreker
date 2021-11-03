import { Link } from "react-router-dom";
import logo from "../logo.svg";
import AutosizeInput from "react-input-autosize/lib/AutosizeInput";

const Root = () => (
  <>
    <h1>
      <img src={logo} alt="Logo" /> Quizzish
    </h1>
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
      <div>of</div>
      <Link to="/gamemaster">
        <button type="button">Nieuw spel beginnen</button>
      </Link>
    </div>
  </>
);

export default Root;
