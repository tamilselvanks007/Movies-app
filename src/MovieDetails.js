import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useHistory } from "react-router-dom";

// export function MovieDetails({ movieList }) { // local data
export function MovieDetails() {
  const { id } = useParams(); //Extracts the id(parameter) from the URL
  // const movie = movieList[id]; //movie is the movie with the id
  const [movie, setMovie] = useState({}); //movie is the movie with the id

  // Get(READ METHOD) the movie by id from the API
  useEffect(() => {
    fetch(`https://61f66eeb2e1d7e0017fd6da5.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((response) => setMovie(response));
    // .then((response) => console.log(response));
  }, [id]);

  // console.log(id, movieList); //id is the id of the movie
  // const movie = movieList[id]; //movie is the movie with the id
  const history = useHistory();
  // {
  //   name: "Ratatouille",
  //   poster:
  //     "https://preview.redd.it/1y84dbedpzz21.jpg?auto=webp&s=e09c6e0ebe20906b91633f1437b8fd7e71c26ce4",
  //   rating: 8,
  //   summary:
  //     "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
  //   trailer: "https://www.youtube.com/embed/MhyUxppGBYo",
  // };
  return (
    <div>
      <div className="title">
        <h1>Movie Details</h1>
      </div>
      <iframe
        width="100%"
        height="850px"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="movie-detail-container">
        <div className="movie-spec">
          <h2 className="movie-name">{movie.name}</h2>
          <p className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button
          onClick={() => history.goBack()}
          variant="contained"
          startIcon={<ArrowBackIosNewIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
