import React from "react";
import "./Node.css";

export default function Node(props) {
  return (
    <div
      className={
        "Node" +
        (props.isStart ? " IsStart" : "") +
        (props.isEnd ? " IsEnd" : "")
      }
    ></div>
  );
}
