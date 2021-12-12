import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Col from "../../../components/Col";
import { styled } from "../../../sharedStyles/theme";
import { url } from "../../../SiteRoute";
import PrivateGameService from "../../services/PrivateGameService";

const StyledGames = styled(Col, {
  overflowY: "auto",
  maxWidth: "$columnMaxWidth",
  margin: "0 auto",
});

async function fetchGames(setGames) {
  const privateGameService = new PrivateGameService();
  const {
    data: {
      listPrivateGames: { items },
    },
  } = await privateGameService.read();
  setGames(items);
}

async function onClickDeleteGame({ id, _version }, setGames) {
  const privateGameService = new PrivateGameService();
  await privateGameService.delete(id, _version);
  await fetchGames(setGames);
}

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames(setGames);
  }, [setGames]);

  return (
    <StyledGames>
      {games?.map((game) => (
        <Col className="glass-tile" key={game.id}>
          <Link to={`${url.EDIT_GAME}${game.id}`}>{game.name}</Link>{" "}
          <button
            className="outline"
            onClick={onClickDeleteGame.bind(null, game, setGames)}
          >
            <FontAwesomeIcon icon={faTrash} /> Verwijderen
          </button>
        </Col>
      ))}
    </StyledGames>
  );
};

export default Games;
