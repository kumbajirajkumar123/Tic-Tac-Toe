import React from "react";
import styles from "./Result.module.css";

const Result = ({ winner, resetGame }) => {
  const CIRCLE = "CIRCLE";
  const CROSS = "CROSS";
  const TIE = "TIE";
  return (
    <>
      <div className={styles.result}>
        {winner == CIRCLE && "Circle Won The Game"}
        {winner == CROSS && "Cross Won The Game"}
        {winner == TIE && "It is a tie"}
        <button className={styles.glow_on} type="button" onClick={resetGame}>
          New Game
        </button>
      </div>
    </>
  );
};

export default Result;
