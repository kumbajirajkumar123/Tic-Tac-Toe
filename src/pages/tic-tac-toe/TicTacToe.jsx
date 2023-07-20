import React, { useState } from "react";
import styles from "./TicTacToe.module.css";
import Square from "../../components/square/Square";
import Result from "../../components/results/Result";

const TicTacToe = () => {
  const EMPTY = "EMPTY";
  const CIRCLE = "CIRCLE";
  const CROSS = "CROSS";

  const [positionState, setPositionState] = useState({
    player: CROSS,
    positions: [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY],
  });

  function takeTurn(position) {
    const positions = [...positionState.positions];
    positions[position] = positionState.player;

    setPositionState({
      player: positionState.player === CIRCLE ? CROSS : CIRCLE,
      positions: positions,
    });
  }

  const resetGame = () => {
    setPositionState({
      player: CROSS,
      positions: [
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
      ],
    });
  };

  const detectWinner = (p) => {
    if (p[0] == CIRCLE && p[1] == CIRCLE && p[2] == CIRCLE) return CIRCLE;
    if (p[3] == CIRCLE && p[4] == CIRCLE && p[5] == CIRCLE) return CIRCLE;
    if (p[6] == CIRCLE && p[7] == CIRCLE && p[8] == CIRCLE) return CIRCLE;
    if (p[0] == CIRCLE && p[3] == CIRCLE && p[6] == CIRCLE) return CIRCLE;
    if (p[1] == CIRCLE && p[4] == CIRCLE && p[7] == CIRCLE) return CIRCLE;
    if (p[2] == CIRCLE && p[5] == CIRCLE && p[8] == CIRCLE) return CIRCLE;
    if (p[0] == CIRCLE && p[4] == CIRCLE && p[8] == CIRCLE) return CIRCLE;
    if (p[2] == CIRCLE && p[4] == CIRCLE && p[6] == CIRCLE) return CIRCLE;

    if (p[0] == CROSS && p[1] == CROSS && p[2] == CROSS) return CROSS;
    if (p[3] == CROSS && p[4] == CROSS && p[5] == CROSS) return CROSS;
    if (p[6] == CROSS && p[7] == CROSS && p[8] == CROSS) return CROSS;
    if (p[0] == CROSS && p[3] == CROSS && p[6] == CROSS) return CROSS;
    if (p[1] == CROSS && p[4] == CROSS && p[7] == CROSS) return CROSS;
    if (p[2] == CROSS && p[5] == CROSS && p[8] == CROSS) return CROSS;
    if (p[0] == CROSS && p[4] == CROSS && p[8] == CROSS) return CROSS;
    if (p[2] == CROSS && p[4] == CROSS && p[6] == CROSS) return CROSS;

    if (p.every((position) => position !== EMPTY)) return "TIE";
  };

  const winner = detectWinner(positionState.positions);

  return (
    <>
      <div>
        <div className={styles.heading}>Tic Tac Toe</div>
        <div className={styles.tictactoe}>
          <Square
            position={0}
            value={positionState.positions[0]}
            takeTurn={takeTurn}
          />
          <Square
            position={1}
            value={positionState.positions[1]}
            takeTurn={takeTurn}
          />
          <Square
            position={2}
            value={positionState.positions[2]}
            takeTurn={takeTurn}
          />
          <Square
            position={3}
            value={positionState.positions[3]}
            takeTurn={takeTurn}
          />
          <Square
            position={4}
            value={positionState.positions[4]}
            takeTurn={takeTurn}
          />
          <Square
            position={5}
            value={positionState.positions[5]}
            takeTurn={takeTurn}
          />
          <Square
            position={6}
            value={positionState.positions[6]}
            takeTurn={takeTurn}
          />
          <Square
            position={7}
            value={positionState.positions[7]}
            takeTurn={takeTurn}
          />
          <Square
            position={8}
            value={positionState.positions[8]}
            takeTurn={takeTurn}
          />
        </div>
        {winner && <Result winner={winner} resetGame={resetGame} />}
      </div>
    </>
  );
};
export default TicTacToe;
