function Rectangle() {
  return (
    <svg className="legend">
      <defs>
        <filter id="shadow-drop">
          <feDropShadow dx="0" dy="5" stdDeviation="50" floodColor="#7E85D0" />
        </filter>
        <linearGradient id="grads" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#8BA3DC" />
          <stop offset="100%" stopColor="#9599E2" />
        </linearGradient>
      </defs>
      <rect
        opacity="0.9"
        fill="url('#grads')"
        height="5vh"
        width="100vw"
        //filter="url('#shadow-drop')"
      />
      <text fill="white" x="15%" y="15%" fontSize="1.5em" fontFamily="NATS">
        Power Consumption Breakdown
      </text>
    </svg>
  );
}

export default Rectangle;
