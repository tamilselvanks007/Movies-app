import React, { useState } from "react";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  // handle like and disLike
  const incrementLike = () => setLike(like + 1); // increment like
  const incrementDisLike = () => setDisLike(disLike + 1); // increment dislike

  return (
    <div className="counter-container">
      <IconButton color="primary" onClick={incrementLike}>
        <Badge badgeContent={like} color="primary">
          <ThumbUpOffAltIcon />
        </Badge>
      </IconButton>
      <IconButton color="error" onClick={incrementDisLike}>
        <Badge badgeContent={disLike} color="error">
          <ThumbDownOffAltIcon />
        </Badge>
      </IconButton>
    </div>
  );
}
