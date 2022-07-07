import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import CityTemp from "./App";

function App() {
  return (
    <div className="App">
      <h2>Weather Information</h2>
      <div id="answer"></div>
      <CityTemp />
      <caption>
        <a
          href="https://github.com/thisisannak23/week4-app"
          alt="link to Github Repository"
        >
          Coded
        </a>{" "}
        by Anna Kazanecki
      </caption>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
