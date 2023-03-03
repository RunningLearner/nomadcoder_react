import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  console.log("i run alltime");
  const iRunOnlyOnce = () => {
    console.log("i run onlyonce");
  };
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("search for", keyword);
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}> click me </button>
    </div>
  );
}

export default App;
