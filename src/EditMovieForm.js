import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { API_URL } from "./API_URL";

export function EditMovieForm({ movie }) {
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);
  const history = useHistory(); // use history to navigate to the previous page
  return (
    <div className="edit-movie-form">
      <div className="title">
        <h1>Edit Movie</h1>
      </div>
      <TextField
        value={name}
        variant="outlined"
        color="secondary"
        label="Name"
        type="text"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        value={poster}
        variant="outlined"
        color="secondary"
        label="Poster"
        type="text"
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        value={rating}
        variant="outlined"
        color="secondary"
        label="Rating"
        type="text"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        value={summary}
        variant="outlined"
        color="secondary"
        label="Summary"
        type="text"
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        value={trailer}
        variant="outlined"
        color="secondary"
        label="Trailer"
        type="text"
        onChange={(event) => setTrailer(event.target.value)}
      />
      <Button
        color="secondary"
        variant="contained"
        onClick={() => {
          const updatedMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          // const copyMovieList = [...movieList];
          // copyMovieList[id] = updatedMovie;
          // setMovieList(copyMovieList);
          // console.log(updatedMovie);
          // history.push("/movies");
          // Add(PUT METHOD) a movie to the API
          // Remember 3 things to create POST METHOD:
          // 1. method must be POST
          // 2. body -  data must be in JSON format
          // 3. headers - json data
          fetch(`${API_URL}/movies/${movie.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedMovie),
            headers: {
              "Content-Type": "application/json", // this is the default header
            },
          }).then(() => history.push("/movies")); // push to the movies page
        }}
      >
        Save
      </Button>
    </div>
  );
}
