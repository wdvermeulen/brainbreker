import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deletePrivateGame } from "../../../graphql/mutations";
import { listPrivateGames } from "../../../graphql/queries";
import { url } from "../../../SiteRoute";

const Games = () => {
  const [games, setGames] = useState([]);

  async function fetchGames() {
    const apiData = await API.graphql({ query: listPrivateGames });
    setGames(apiData.data.listPrivateGames.items);
  }

  async function deleteGame(id) {
    const newGamesArray = games.filter((note) => note.id !== id);
    setGames(newGamesArray);
    await API.graphql({
      query: deletePrivateGame,
      variables: { input: { id } },
    });
  }

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div className="glass-tile">
      {games.map((game) => (
        <div className="row" key={game.id}>
          <Link to={`${url.EDIT_GAME}${game.id}`}>{game.name}</Link>{" "}
          <button className="outline" onClick={() => deleteGame(game.id)}>
            <FontAwesomeIcon icon={faTrash} /> Verwijderen
          </button>
        </div>
      ))}
    </div>
  );
};

export default Games;
