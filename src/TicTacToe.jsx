import React, { useState } from "react";
import "./TicTacToe.css";

function TicTacToe() {

  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (board[index] !== "") return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  // reset function
  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setIsXTurn(true);
  };

  return (
    <div className="container">
      <h2>Tic Tac Toe</h2>

      <div className="board">
        {board.map((cell, index) => (
          <button
            key={index}
            className={`cell ${cell}`}
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>

      {/* Reset Button */}
      <button className="reset-btn" onClick={resetGame}>
        Reset Game
      </button>

    </div>
  );
}

export default TicTacToe;