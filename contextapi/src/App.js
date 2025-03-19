// 📌 File: App.js
import React from "react";
import "./App.css";
import { ThemeProvider, useThemeContext } from "./Usecontext";

function App() {
  return (
    <ThemeProvider>
      <Grandparent />
    </ThemeProvider>
  );
}

function Grandparent() {
  console.log("Grandparent");
  return <Parent />;
}

function Parent() {
  console.log("Parent");
  return <Child />;
}

function Child() {
  console.log("Child");
  const { themeMode, handleToggle } = useThemeContext();
  const text = themeMode === 2 ? "🌑 Dark Mode" : "🌞 Light Mode";
  return <button onClick={handleToggle}>{text}</button>;
}

export default App;
