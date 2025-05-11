import "./DarkMode.css";

function DarkMode({ mode, onClick }) {
  return (
    <div
      className={mode === "light" ? "sun" : "moon"}
      onClick={onClick}
      role="button"
      aria-label={
        mode === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
    ></div>
  );
}

export default DarkMode;
