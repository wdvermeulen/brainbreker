import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listGames } from "../../../graphql/queries";
import { deleteGame as deleteGameMutation } from "../../../graphql/mutations";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { url } from "../../../app/SiteRoute";

const Games = () => {
  const [games, setGames] = useState([]);

  async function fetchGames() {
    const apiData = await API.graphql({ query: listGames });
    setGames(apiData.data.listGames.items);
  }

  async function deleteGame(id) {
    const newGamesArray = games.filter((note) => note.id !== id);
    setGames(newGamesArray);
    await API.graphql({
      query: deleteGameMutation,
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
