import React, { useState } from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useHistory } from "react-router-dom";
import { Counter } from "./Counter";

export function Movie({
  name,
  poster,
  rating,
  summary,
  deleteButton,
  editButton,
  id,
}) {
  // In function outside the return we use normal js only and inside the return we use jsx
  // conditional styling
  const styles = { color: rating > 8.5 ? "green" : "red" }; //ternary operator

  // toggle hook
  const [show, setShow] = useState(true);
  const history = useHistory(); // use history hook
  // Conditional styling
  const styles2 = {
    display: show ? "block" : "none",
  };
  return (
    <Card className="movie-container">
      <img src={poster} alt={name} className="movie-poster" />
      <CardContent>
        <div className="movie-specs">
          <h2 className="movie-name">
            {name}
            <IconButton
              color="info"
              aria-label="Toggle summary"
              onClick={() => setShow(!show)}
            >
              {/* Coditional Rendaring */}
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton
              aria-label="movie-info"
              color="primary"
              // history.push is used to navigate to a different page(change the url)
              onClick={() => history.push(`/movies/${id}`)}
            >
              <InfoOutlinedIcon />
            </IconButton>
          </h2>
          <p style={styles} className="movie-rating">
            <StarRoundedIcon />
            {rating}
          </p>
        </div>
        <p style={styles2} className="movie-summary">
          {summary}
        </p>
      </CardContent>
      {/* <show ? <p className="movie-summary"> {summary} </p> : "" } //Conditional redundant */}
      <CardActions>
        <Counter /> {deleteButton} {editButton}
      </CardActions>
    </Card>
  );
}
