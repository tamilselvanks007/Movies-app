import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { API_URL } from "./API_URL";

// export function AddMovie({ movieList, setMovieList }) { // local data
export function AddMovie() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const history = useHistory();
  return (
    <div className="add-movie-form">
      <div className="title">
        <h1>Add Movie</h1>
      </div>
      <TextField
        color="primary"
        variant="outlined"
        label="Name"
        type="text"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        color="primary"
        variant="outlined"
        label="Poster"
        type="text"
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        color="primary"
        variant="outlined"
        label="Rating"
        type="text"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        color="primary"
        variant="outlined"
        label="Summary"
        type="text"
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        color="primary"
        variant="outlined"
        label="Trailer"
        type="text"
        onChange={(event) => setTrailer(event.target.value)}
      />
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };

          // Add(POST METHOD) a movie to the API
          // Remember 3 things to create POST METHOD:
          // 1. method must be POST
          // 2. body -  data must be in JSON format
          // 3. headers - json data
          fetch(`${API_URL}/movies/`, {
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: {
              "Content-Type": "application/json", // this is the default header
            },
          }).then(() => history.push("/movies")); // push to the movies page
          // setMovieList([...movieList, newMovie]); // local data
        }}
      >
        Add Movie
      </Button>
    </div>
  );
}
