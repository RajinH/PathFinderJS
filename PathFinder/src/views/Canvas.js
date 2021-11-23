import React from "react";
import Grid from "../components/Grid";
import "./Canvas.css";

function Canvas() {
  return (
    <div className={"CanvasMain"}>
      <div className={"ControlPane"}>
        <h1>Control Features</h1>
        <button>Start Position</button>
        <button>End Position</button>
        <button>Toggle Wall Brush</button>
      </div>
      <Grid
        size={20}
        startPos={{ x: 1, y: 1 }}
        endPos={{ x: 20, y: 20 }}
      ></Grid>
      <div className={"ButtonPane"}>
        <h1>Algorithms to try!</h1>
        <button>A* Algorithm</button>
        <button>Dijkstra's Algorithm</button>
        <button>A* (w/ Jump Point Search) Algorithm </button>
      </div>
    </div>
  );
}

export default Canvas;
