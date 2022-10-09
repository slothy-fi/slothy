import React from "react";

import { ReactComponent as ReactLogo } from "./block.svg";
import "./Block.css";

const strokes = new Array(9).fill(null);

// variant = "created" | "add"
export default function Block({ strokeColor = "#9E9FA6FF", variant = "created", onClick }) {
  return (
    <div className="block" onClick={onClick}>
      <ReactLogo className="blockSvg" />

      <div className="jss2142">
        {strokes.map((_, index) => (
          <div key={index} className="jss2143 jss2875" style={{ borderColor: strokeColor }}></div>
        ))}
      </div>

      {variant === "add" && (
        <div className="add" style={{ color: strokeColor }}>
          +
        </div>
      )}
    </div>
  );
}
