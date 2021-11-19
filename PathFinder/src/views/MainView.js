import React from "react";
import "./MainView.css";
import Canvas from "./Canvas";

function MainView() {
  return (
    <div className={"MainPane"}>
      <h1>Pathfinding/Search Visualisation</h1>
      <Canvas></Canvas>
      <div className={"ButtonPane"}>
        <h1>Algorithms to try!</h1>
        <button>A* Algorithm</button>
        <button>Dijkstra's Algorithm</button>
        <button>A* (w/ Jump Point Search) Algorithm </button>
      </div>
    </div>
  );
}

export default MainView;
