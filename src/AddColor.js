import React, { useState } from "react";
import { ColorBox } from "./ColorBox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function AddColor() {
  // input box hook
  const [color, setColor] = useState("white"); //pink is the initial state
  const styles = {
    background: color,
  };

  // add color hook
  const [colorList, setColorList] = useState([
    "black",
    "crimson",
    "brown",
    "green",
    "yellow",
    "purple",
    "white",
  ]);

  // const colorList = ["crimson", "orange", "green", "yellow", "purple"];
  // Todo - Capture - Typing event
  //onChange={(event)=>setColor(event.target.value)}
  // event.target.value - name of the value
  // setColor(event.target.value) - function to set the state
  // setColor - function to change the state
  return (
    <div>
      <div className="title">
        <h1>Add Color</h1>
      </div>
      <div className="add-color-form">
        <TextField
          variant="outlined"
          color="success"
          value={color}
          onChange={(event) => setColor(event.target.value)} // typing event
          style={styles}
          placeholder="Enter Color"
        />
        {/* copy the colorlist and add a new color to it */}
        {/* spread operator */}
        <Button
          color="success"
          variant="contained"
          onClick={() => setColorList([...colorList, color])}
        >
          Add Color
        </Button>
      </div>

      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}
    </div>
  );
}
