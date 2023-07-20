import React from "react";
import styles from "./Square.module.css";
import Circle from "../circle/Circle";
import Cross from "../cross/Cross";

const Square = ({ position, value, takeTurn }) => {
  const EMPTY = "EMPTY";
  const CIRCLE = "CIRCLE";
  const CROSS = "CROSS";

  function handleClick() {
    if (value === EMPTY) takeTurn(position);
  }

  return (
    <>
      <div className={styles.square} onClick={handleClick}>
        {value === CIRCLE && <Circle />}
        {value === CROSS && <Cross />}
      </div>
    </>
  );
};

export default Square;
