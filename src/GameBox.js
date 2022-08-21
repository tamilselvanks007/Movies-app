import React from "react";

export function GameBox({ val, onPlayerClick }) {
  // const val = "X";
  // const [val,setValue] = useState(null);
  const styles = {
    color: val === "X" ? "black" : "white",
  };
  return (
    <div
      // onClick={() => setVal(val === "X" ? "0" : "X")}
      onClick={() => onPlayerClick()}
      style={styles}
      className="game-box"
    >
      {val}
    </div>
  );
}
