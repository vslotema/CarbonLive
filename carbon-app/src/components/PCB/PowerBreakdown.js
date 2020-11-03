import React from "react";
import { Chart } from "./Chart";
import Circle from "../CarbonLive/Circle";
import Donut from "./DonutChart";
import Rectangle from "./Rectangle";

export const dataformat = (breakdown, total) => {
  const arr = [];
  if (breakdown) {
    const arr = Object.keys(breakdown).reduce((acc, i) => {
      acc[i] = {
        id: i,
        label: i,
        value: ((breakdown[i] / total) * 100).toFixed(1),
        color: "orange",
      };
      return acc;
    }, {});

    const right = Object.entries(arr).map(([k, v]) => {
      return { id: k, label: k, value: v.value, color: v.color };
    });

    return right;
  }
  return arr;
};

function PowerBreakdown(props) {
  console.log("props ", props.isAuthed);
  return (
    <div>
      {props.isAuthed.powerConsumptionBreakdown ? (
        <div style={{ position: "absolute", top: "134px", left: "87px" }}>
          <Donut fossilfree={props.isAuthed.fossilFreePercentage} />
        </div>
      ) : (
        <div />
      )}
      {props.isAuthed.powerConsumptionBreakdown ? (
        <Chart
          data={dataformat(
            props.isAuthed.powerConsumptionBreakdown,
            props.isAuthed.powerConsumptionTotal
          )}
        />
      ) : (
        <Circle stroke-width="6" intensity={null} />
      )}
      {props.isAuthed.powerConsumptionBreakdown ? (
        <div
          className="renewable"
          style={{ position: "absolute", top: "351px", left: "87px" }}
        >
          <Donut renewable={props.isAuthed.renewablePercentage} />
        </div>
      ) : (
        <div />
      )}
      <div
        className="header"
        style={{ position: "absolute", top: "575px", left: "1px" }}
      >
        <Rectangle></Rectangle>
      </div>
    </div>
  );
}

export default PowerBreakdown;
