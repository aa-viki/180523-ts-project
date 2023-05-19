import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Movies } from "./components/movies/Movies";
import { Timer } from "./components/timer/Timer";
import { Counter } from "./components/counter/Counter";
import { Todos } from "./todos/Todos";

function App() {
  return (
    <div className="App">
      <Movies />
      {/* <Timer /> */}
      {/* <Counter /> */}
      {/* <Todos /> */}
    </div>
  );
}

export default App;
