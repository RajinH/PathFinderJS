import logo from "./logo.svg";
import Node from "./components/Node";
import Grid from "./components/Grid";
import "./App.css";

function App() {
  return (
    <div className={"Wrapper"}>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Pathfinding Visualiser
      </h1>
      <Grid
        startPos={{ x: 4, y: 5 }}
        endPos={{ x: 10, y: 10 }}
        size={10}
      ></Grid>
      <button>Visualise</button>
    </div>
  );
}

export default App;
