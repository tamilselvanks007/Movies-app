import React, { useState } from "react";
import { GameBox } from "./GameBox";

export function TicTacToe() {
  // give null to empty the board
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  // useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const decideWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    //if winning condition is met, return the winner
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        // console.log("winner");
        return board[a];
      }
    }
    //if no winner, return null
    return null;
  };

  const [isXturn, setIsXturn] = useState(true);
  const handleClick = (index) => {
    const boardCopy = [...board]; // copy the board

    // console.log(index); // 0,1,2,3,4,5,6,7,8
    //console.log(boardCopy,index); // [ 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null' ] 0
    boardCopy[index] = isXturn ? "X" : "O"; // change the value of the index to X
    setBoard(boardCopy); // set the board to the new board
    setIsXturn(!isXturn); // change the turn
  };

  const winner = decideWinner(board);

  return (
    <div>
      <div className="title">
        <h1>TicTacToe</h1>
      </div>
      <div className="full-game">
        <div className="board">
          {/* loop -> map */}
          {board.map(
            (
              val,
              index // val = "null", index = 0,1,2,3,4,5,6,7,8
            ) => (
              // parent component to child component data has to be passed -> props
              <GameBox val={val} onPlayerClick={() => handleClick(index)} />
            )
          )}
        </div>
      </div>
      {/* conditional rendering */}
      {winner ? <h1 className="title">{winner} is the winner!</h1> : ""}
    </div>
  );
}
