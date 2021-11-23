import React from "react";
import "./MainView.css";
import Canvas from "./Canvas";

function MainView() {
  return (
    <div className={"MainPane"}>
      <h1>Pathfinding/Search Visualisation</h1>
      <Canvas></Canvas>
    </div>
  );
}

export default MainView;
