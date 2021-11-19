import React from "react";
import Node from "./Node";
import "./Grid.css";

export default function Grid(props) {
  const generateTable = () => {
    var grid = [];
    for (let i = 1; i < props.size + 1; i++) {
      for (let j = 1; j < props.size + 1; j++) {
        if (i === props.startPos.x && j === props.startPos.y) {
          grid.push(<Node isStart={true} x={i} y={j}></Node>);
        } else if (i === props.endPos.x && j === props.endPos.y) {
          grid.push(<Node isEnd={true} x={i} y={j}></Node>);
        } else {
          grid.push(<Node x={i} y={j}></Node>);
        }
      }
    }
    return grid;
  };

  return <div className={"Grid"}>{generateTable()}</div>;
}
