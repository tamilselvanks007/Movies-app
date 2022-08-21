import "./App.css";
// import React, { useState } from "react";
import {
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import { AddColor } from "./AddColor";
import { Msg } from "./Msg";
import { TicTacToe } from "./TicTacToe";
import { NotFound } from "./NotFound";
import { MovieList } from "./MovieList";
// import { INITIAL_MOVIE_LIST } from "./INITIAL_MOVIE_LIST";
import { AddMovie } from "./AddMovie";
import { EditMovie } from "./EditMovie";
import { MovieDetails } from "./MovieDetails";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// App component
function App() {
  // const poster =
  //   "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg";
  // const name = "No Way Home";
  // const rating = 8.6;
  // const summary =
  //   "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.";

  // const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ul className="title">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/color-game">Add Color</Link>
          </li>
          <li>
            <Link to="/movies/add">Add Movie</Link>
          </li>
          <li>
            <Link to="/tic-tac-toe">TicTacToe</Link>
          </li>
        </ul>

        <div className="route-container">
          <Switch>
            <Route exact path="/">
              <Msg />
            </Route>
            <Route path="/films">
              {/* Redirect is used to redirect to a different page. */}
              <Redirect to="/movies"></Redirect>
            </Route>
            <Route path="/movies/add">
              {/* <AddMovie movie={movieList} setMovieList={setMovieList} /> // local data */}
              <AddMovie />
            </Route>
            <Route path="/movies/edit/:id">
              {/* <EditMovie movieList={movieList} setMovieList={setMovieList} /> // local data */}
              <EditMovie />
            </Route>
            {/* : -> makes id a variable */}
            <Route path="/movies/:id">
              {/* <MovieDetails movieList={movieList} /> */}{" "}
              {/* passing data */}
              <MovieDetails />
            </Route>
            <Route path="/movies">
              {/* <MovieList movieList={movieList} setMovieList={setMovieList} /> // local data  */}
              <MovieList />
            </Route>
            <Route path="/color-game">
              <AddColor />
            </Route>
            <Route path="/tic-tac-toe">
              <TicTacToe />
            </Route>
            <Route path="**">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
