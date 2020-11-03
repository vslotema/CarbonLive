import "./Legend.css";

function Legend() {
  return (
    <svg className="legend">
      <defs>
        <filter id="shadow-drop">
          <feDropShadow dx="0" dy="5" stdDeviation="50" floodColor="#7E85D0" />
        </filter>
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="#2AD400" />
          <stop offset="12.5%" stopColor="#70E21F" />
          <stop offset="25%" stopColor="#F3FB5A" />
          <stop offset="37.5%" stopColor="#f9d057" />
          <stop offset="50%" stopColor="#f29e2e" />
          <stop offset="62.5%" stopColor="#e76818" />
          <stop offset="75%" stopColor="#D44C00" />
          <stop offset="87.5%" stopColor="#d7191c" />
          <stop offset="100%" stopColor="#C30000" />
        </linearGradient>
      </defs>
      <rect
        fill="url('#gradient')"
        height="18"
        width="100vw"
        filter="url('#shadow-drop')"
      />
      <text
        className="info"
        fill="white"
        x="4%"
        y="25%"
        fontSize="1.1em"
        fontFamily="NATS"
      >
        0
      </text>
      <text
        className="info"
        fill="white"
        x="22.0%"
        y="25%"
        fontSize="1.1em"
        fontFamily="NATS"
      >
        200
      </text>
      <text
        className="info"
        fill="white"
        x="45.0%"
        y="25%"
        fontSize="1.1em"
        fontFamily="NATS"
      >
        400
      </text>
      <text
        className="info"
        fill="white"
        x="69.5%"
        y="25%"
        fontSize="1.1em"
        fontFamily="NATS"
      >
        600
      </text>
      <text
        className="info"
        fill="white"
        x="92%"
        y="25%"
        fontSize="1.1em"
        fontFamily="NATS"
      >
        800
      </text>
    </svg>
  );
}

export default Legend;
