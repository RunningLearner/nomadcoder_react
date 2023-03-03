import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  console.log("i run alltime");
  const iRunOnlyOnce = () => {
    console.log("i run onlyonce");
  };
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}> click me </button>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
