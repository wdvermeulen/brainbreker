import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { url } from "../../../SiteRoute";
import PrivateGameService from "../../services/PrivateGameService";

async function fetchGames(setGames) {
  const privateGameService = new PrivateGameService();
  const readGames = await privateGameService.read();
  setGames(readGames);
}

async function onClickDeleteGame(id) {
  const privateGameService = new PrivateGameService();
  await privateGameService.delete(id);
}

const Games = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGames(setGames);
  });

  return (
    <div className="glass-tile">
      {games.map((game) => (
        <div className="row" key={game.id}>
          <Link to={`${url.EDIT_GAME}${game.id}`}>{game.name}</Link>{" "}
          <button className="outline" onClick={onClickDeleteGame.bind(game.id)}>
            <FontAwesomeIcon icon={faTrash} /> Verwijderen
          </button>
        </div>
      ))}
    </div>
  );
};

export default Games;
