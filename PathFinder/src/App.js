import logo from "./logo.svg";
import Node from "./components/Node";
import Grid from "./components/Grid";
import "./App.css";
import React from "react";
import MainView from "./views/MainView";

const button = React.createContext();

function App() {
  return <MainView></MainView>;
}

export default App;
