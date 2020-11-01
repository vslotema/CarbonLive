import React from "react";
import Circle from "./Circle";
import Legend from "./Legend";
import { ColorList } from "./Colors";

function CarbonLive(props) {
  const style = {
    color: "white",
    fontFamily: "NATS",
    fontSize: "1.2em",
    textAlign: "center",
    display: "block",
    marginTop: "23px",
  };

  return (
    <div>
      <Circle
        stroke-width="6"
        intensity={props.isAuthed.carbonIntensity}
      ></Circle>
      <h7 style={style}>Carbon intensity (gCO₂eq/kWh)</h7>
      <Legend />
    </div>
  );
}

export default CarbonLive;
