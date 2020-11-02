import { ColorList } from "./Colors";
import "./Legend.css";

function Circle(props) {
  const strokecolor = () =>
    ColorList.filter(
      (c) => c.min <= props.intensity && c.max > props.intensity
    );

  const text1 = !props.intensity ? "" : props.intensity + "g";
  const text2 = !props.intensity ? "" : "carbon intensity";
  const text3 = !props.intensity ? "No data available" : "";
  const stroke = !props.intensity ? "#7C86AF" : strokecolor()[0].color;

  return (
    <div className="svg-container">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">
        <defs>
          <filter id="drop-shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#7E85D0" />
          </filter>
          <filter id="drop-shadow2">
            <feDropShadow
              dx="0"
              dy="5"
              stdDeviation="4.5"
              floodColor="#7E85D0"
            />
          </filter>
          <linearGradient id="myGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#8BC6EC" />
            <stop offset="100%" stopColor="#9599E2" />
          </linearGradient>
        </defs>
        <circle
          style={props}
          stroke={stroke}
          cx="50%"
          cy="43%"
          r="70"
          id="circle"
          fill="url('#myGradient')"
          filter="url(#drop-shadow2)"
        />

        <text
          fill="white"
          x="50%"
          y="43%"
          dominant
          aseline="middle"
          textAnchor="middle"
          fontSize="1.8em"
          fontFamily="NATS"
          // filter="url(#drop-shadow)"
        >
          {text1}
        </text>
        <text
          fill="white"
          x="50%"
          y="48%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="0.75em"
          fontFamily="NATS"
        >
          {text2}
        </text>
        <text
          fill="#7C86AF"
          className="noData"
          x="50%"
          y="43%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="1.0em"
          fontFamily="NATS"
        >
          {text3}
        </text>
      </svg>
    </div>
  );
}

export default Circle;
