import React, { useState } from "react";
import DarkMode from "../DarkMode/DarkMode";
import "./DemoWebPage.css";

function DemoWebPage() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <div className={`demo-webpage ${mode}`}>
      <header className="header">
        <div className="dark-mode-toggle">
          <DarkMode mode={mode} onClick={toggleMode} />
        </div>
        <h1 className="app-title">My Demo App</h1>
      </header>
      <main className="content">
        <p>
          Welcome to the demo web page! Use the toggle button in the header to
          switch between light and dark modes.
        </p>
      </main>
    </div>
  );
}

export default DemoWebPage;
