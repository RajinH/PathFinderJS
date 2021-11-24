import React, { useState } from "react";
import Grid from "../components/Grid";
import "./Canvas.css";
import { ControlContext } from "../context/ControlContext";

function Canvas() {
  const [controlSettings, setControlSettings] = useState({
    isStartToggled: false,
    isEndToggled: false,
    isWallToggled: false,
  });

  function toggleStart() {
    setControlSettings({
      isStartToggled: true,
      isEndToggled: false,
      isWallToggled: false,
    });
  }

  function toggleEnd() {
    setControlSettings({
      isStartToggled: false,
      isEndToggled: true,
      isWallToggled: false,
    });
  }

  function toggleWall() {
    setControlSettings({
      isStartToggled: false,
      isEndToggled: false,
      isWallToggled: true,
    });
  }

  return (
    <div className={"CanvasMain"}>
      <div className={"ControlPane"}>
        <h1>Control Features</h1>
        <button
          onClick={() => {
            toggleStart();
          }}
        >
          Start Position
        </button>
        <button
          onClick={() => {
            toggleEnd();
          }}
        >
          End Position
        </button>
        <button
          onClick={() => {
            toggleWall();
          }}
        >
          Toggle Wall Brush
        </button>
      </div>
      <ControlContext.Provider value={{ controlSettings, setControlSettings }}>
        <Grid size={20}></Grid>
      </ControlContext.Provider>
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
