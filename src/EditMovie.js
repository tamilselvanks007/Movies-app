import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "./API_URL";
import { EditMovieForm } from "./EditMovieForm";

// export function EditMovie({ movieList, setMovieList }) { // local data
export function EditMovie() {
  const { id } = useParams(); // use params to get the id of the movie to be edited
  // const movie = movieList[id]; // get the movie to be edited
  // console.log(movie); // { name: "Star Wars", poster: "...", rating: "...", summary: "..." }

  const [movie, setMovie] = useState(null); //movie is the movie with the id

  // Get(READ METHOD) the movie by id from the API
  useEffect(() => {
    fetch(`${API_URL}/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((response) => setMovie(response));
    // .then((response) => console.log(response));
  }, [id]);

  // console.log(movie); // { name: "Star Wars", poster: "...", rating: "...", summary: "..." }

  return (
    <div>
      {/* Conditional Rendering */}
      {movie ? (
        <EditMovieForm movie={movie} />
      ) : (
        <h2 className="title">Loading...</h2>
      )}
    </div>
  );
}
