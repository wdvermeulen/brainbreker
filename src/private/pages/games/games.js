import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { url } from "../../../SiteRoute";
import PrivateGameService from "../../services/PrivateGameService";

const Games = () => {
  const privateGameService = new PrivateGameService();
  const [games, setGames] = useState([]);

  async function fetchGames() {
    const readGames = await privateGameService.read();
    setGames(readGames);
  }

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="glass-tile">
      {games.map((game) => (
        <div className="row" key={game.id}>
          <Link to={`${url.EDIT_GAME}${game.id}`}>{game.name}</Link>{" "}
          <button
            className="outline"
            onClick={() => privateGameService.delete(game.id)}
          >
            <FontAwesomeIcon icon={faTrash} /> Verwijderen
          </button>
        </div>
      ))}
    </div>
  );
};

export default Games;
