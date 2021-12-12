import { styled } from "../../sharedStyles/theme";
import { url } from "../../SiteRoute";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

const StyledLogo = styled("div", {
  img: {
    height: ".75em",
  },
  a: {
    textDecoration: "inherit",
  },
});

const Logo = () => (
  <StyledLogo id="Logo">
    <Link to={url.HOME}>
      <h1>
        <img src={logo} alt="Logo" /> Quizɀish
      </h1>
    </Link>
  </StyledLogo>
);

export default Logo;
