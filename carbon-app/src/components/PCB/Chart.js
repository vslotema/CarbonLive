import React from "react";
import { ResponsivePie } from "@nivo/pie";
import "./Chart.css";

const theme = {
  fontSize: 16,
  fontFamily: "NATS",
  position: "relative",
};

export const Chart = ({ data /* see data tab */ }) => {
  return (
    <div style={{ height: 350 }}>
      <ResponsivePie
        theme={theme}
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 90 }}
        startAngle={-180}
        innerRadius={0.7}
        padAngle={1.7}
        cornerRadius={8}
        sortByValue="true"
        colors={{ scheme: "red_yellow_blue", modifiers: [["darker", 0.8]] }}
        borderWidth={0.1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#292636"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={2}
        radialLabelsLinkColor={{ from: "color" }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#292636"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
};
