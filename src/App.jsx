import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DarkMode from "./DarkMode/DarkMode";

function App() {
  const [mode, setMode] = useState("light");

  return (
    <>
      <DarkMode
        mode={mode}
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
      />
    </>
  );
}

export default App;
