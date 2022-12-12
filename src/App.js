import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AnimatedRoutes } from "./AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
