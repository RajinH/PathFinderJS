import React, { useContext, useEffect, useState } from "react";
import Node from "./Node";
import "./Grid.css";
import { ControlContext } from "../context/ControlContext";
import NodeStructure from "../NodeStructure";
import GridStructure from "../GridStructure";

export default function Grid(props) {
  const CONTROL_CONTEXT = useContext(ControlContext);

  const [gridStructure, setGridStructure] = useState({});

  const generateNodes = () => {
    var nodes = [];
    for (let i = 0; i < props.size; i++) {
      for (let j = 0; j < props.size; j++) {
        let node = new NodeStructure(i, j);
        nodes.push(node);
      }
    }
    console.log(nodes);
    return nodes;
  };

  useEffect(() => {
    var nodes = generateNodes();
    var grid_ = new GridStructure(nodes, props.size);
    setGridStructure(grid_);
    console.log(gridStructure);
  }, []);

  const drawNodeUI = () => {
    if (gridStructure.grid) {
      var nodeUI = [];
      for (let i = 0; i < gridStructure.grid.length; i++) {
        for (let j = 0; j < gridStructure.grid[i].length; j++) {
          nodeUI.push(<Node></Node>);
        }
      }
      console.log(gridStructure);
      return nodeUI;
    }
  };

  return <div className={"Grid"}>{drawNodeUI()}</div>;
}
