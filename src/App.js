import logo from "./logo.svg";
import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import TicTacToe from "./pages/tic-tac-toe/TicTacToe";

function App() {
  return (
    <>
      <div className={styles.app}>
        <TicTacToe />
      </div>
    </>
  );
}

export default App;
