import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { useHistory } from "react-router-dom";
import { API_URL } from "./API_URL";

// export function MovieList({ movieList, setMovieList }) { // local data
export function MovieList() {
  const history = useHistory();
  const [movieList, setMovieList] = useState([]);

  // Get(READ METHOD) a movies from the API
  // useEffect is a hook that runs a piece of code based on a given condition
  const getMovies = () => {
    // get movies from the API
    fetch(`${API_URL}/movies`, {
      method: "GET", // GET is the default method
    }) // fetch is a function that makes a request to the API
      .then((data) => data.json()) // converts the data to json
      .then((response) => setMovieList(response)); // sets the data to the state
  };

  useEffect(() => getMovies(), []); // runs the function when the component is mounted

  // Delete(DELETE METHOD) a movie by id
  const deleteMovie = (id) => {
    //console.log(`Deleted Movie with id: ${id}`); // deleteMovie is a function that deletes a movie with the given id
    fetch(`${API_URL}/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies()); // getMovies is a function that gets all the movies from the API
  };

  return (
    <div className="movie-list">
      {movieList.map(({ name, poster, rating, summary, id }) => (
        <Movie
          key={id}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary}
          deleteButton={
            <IconButton
              aria-label="delete"
              color="warning"
              onClick={() => {
                // console.log(index);
                // const copyMovieList = [...movieList];
                // copyMovieList.splice(index, 1);
                // setMovieList(copyMovieList);
                deleteMovie(id);
              }}
            >
              <DeleteOutlineIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              aria-label="edit"
              color="secondary"
              onClick={() => history.push(`/movies/edit/${id}`)}
            >
              <EditOutlinedIcon />
            </IconButton>
          }
          id={id}
        />
      ))}
    </div>
  );
}
