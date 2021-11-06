import logo from "./logo.svg";
import "./Logo.scss";
import { Link } from "react-router-dom";

const Logo = () => (
  <div id="Logo">
    <Link to="/">
      <h1>
        <img src={logo} alt="Logo" /> Quizɀish
      </h1>
    </Link>
  </div>
);

export default Logo;
