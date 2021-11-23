import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listQuizs } from "../../../graphql/queries";
import { deleteQuiz as deleteQuizMutation } from "../../../graphql/mutations";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Load = () => {
  const [games, setGames] = useState([]);

  async function fetchQuizs() {
    const apiData = await API.graphql({ query: listQuizs });
    setGames(apiData.data.listQuizs.items);
  }

  async function deleteQuiz(id) {
    const newGamesArray = games.filter((note) => note.id !== id);
    setGames(newGamesArray);
    await API.graphql({
      query: deleteQuizMutation,
      variables: { input: { id } },
    });
  }

  useEffect(() => {
    fetchQuizs();
  }, []);

  console.log(games);
  return (
    <div className="glass-tile">
      {games.map((game) => (
        <div className="row" key={game.id}>
          <Link to={`./game/${game.id}`}>{game.name}</Link>{" "}
          <button className="outline" onClick={() => deleteQuiz(game.id)}>
            <FontAwesomeIcon icon={faTrash} /> Verwijderen
          </button>
        </div>
      ))}
    </div>
  );
};

export default Load;
