import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Root = () => (
  <div>
    <h1>
      <img src={logo} alt="Logo" /> Quizzish
    </h1>
    <div>Startcode</div>
    <form action="/">
      <input
        type="text"
        placeholder="____"
        maxLength={4}
        minLength={4}
        size={4}
      />
      <button type="submit">Meespelen</button>
    </form>
    <div>of</div>
    <Link to="/gamemaster">
      <button type="button">Nieuw spel beginnen</button>
    </Link>
  </div>
);

export default Root;
