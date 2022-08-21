import React from "react";

export function ColorBox({ color }) {
  // color is the props
  const styles = {
    backgroundColor: color,
    height: "50px",
    width: "100%",
    marginTop: "10px",
  };

  return <div style={styles}></div>;
}
