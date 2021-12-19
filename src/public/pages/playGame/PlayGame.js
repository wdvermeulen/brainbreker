import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Col from "../../../components/Col";
import Logo from "../../../components/logo/Logo";
import { styled } from "../../../sharedStyles/theme";
import { useGame } from "../publicHomeHooks";
import { useOnClickJoin, usePlayGame, useUserList } from "./playGameHooks";

const StyledPlayGame = styled(Col, {
  maxWidth: "$columnMaxWidth",
  margin: "0 auto",
});

const getData = async (game, pin, setGame, userList, getUserList) => {
  if ((!game || game.pin.toString() !== pin) && pin.length > 3)
    await setGame(pin);
  if (userList === null) await getUserList();
};

const PlayGame = () => {
  const { game, setGame } = useGame();
  const { pin } = useParams();
  const playGame = usePlayGame();
  const { userName, userList } = playGame;
  const getUserList = useUserList();
  // const subscribeToUser = useSubscribeToUser();
  const onClickJoin = useOnClickJoin();

  useEffect(() => {
    getData(game, pin, setGame, userList, getUserList);
  }, [game, pin, setGame, userList, getUserList]);

  // useEffect(() => {
  //   return subscribeToUser();
  // }, []);

  return (
    <StyledPlayGame>
      <Logo />
      {game ? (
        <>
          <div className="glass-tile center">
            <div>
              <label htmlFor="nameInput">Uw gebruikersnaam: </label>
            </div>
            <input
              id="nameInput"
              type="text"
              maxLength={64}
              minLength={1}
              {...userName}
            />
            <button onClick={onClickJoin}>Verbind</button>
          </div>
          <div className="glass-tile center">
            <div>Verbonden met: {game?.name}</div>
            {userList && (
              <ol>
                {userList.map((user) => (
                  <li key={user.id}>{user.name}</li>
                ))}
              </ol>
            )}
          </div>
        </>
      ) : (
        <div className="glass-tile center">Niet verbonden</div>
      )}
    </StyledPlayGame>
  );
};

export default PlayGame;
