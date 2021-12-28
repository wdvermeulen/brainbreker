import Col from "../../../components/Col";
import Logo from "../../../components/logo/Logo";
import { styled } from "../../../sharedStyles/theme";
import { useGame } from "../publicHomeHooks";
import { usePlayGame } from "./playGameHooks";

const StyledLobby = styled(Col, {
  maxWidth: "$columnMaxWidth",
  margin: "0 auto",
});

const Lobby = () => {
  const {
    game: { name },
  } = useGame();
  const { userName, userList } = usePlayGame();

  return (
    <StyledLobby>
      <Logo />
      <div className="glass-tile center">
        <div>
          <label htmlFor="nameInput">Uw gebruikersnaam: </label>
        </div>
        <input
          id="nameInput"
          type="text"
          maxLength={64}
          minLength={1}
          disabled
          {...userName}
        />
      </div>
      <div className="glass-tile center">
        <div>Verbonden met: {name}</div>
        <ol>
          {Object.entries(userList).map(([id, user]) => {
            console.log("id, user", id, user);
            return <li key={id}>{user}</li>;
          })}
        </ol>
      </div>
    </StyledLobby>
  );
};

export default Lobby;
