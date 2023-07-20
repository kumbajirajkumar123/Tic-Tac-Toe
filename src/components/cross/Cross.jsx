import React from "react";
import styles from "./Cross.module.css";

const Cross = () => {
  return (
    <>
      <div>
        <svg
          width="100"
          height="100"
          viewBox="-50 -50 100 100"
          className={styles.cross}
        >
          <line x1="-36" y1="-36" x2="36" y2="36" />
          <line x1="-36" y1="36" x2="36" y2="-36" />
        </svg>
      </div>
    </>
  );
};

export default Cross;
