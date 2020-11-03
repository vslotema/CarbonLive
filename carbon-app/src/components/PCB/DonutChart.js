function Donut(props) {
  const p = props.fossilfree ? props.fossilfree : props.renewable;
  const c1 = (p * (3.1416 * 132)) / 100;
  const c2 = 3.1416 * 100;
  const text1 = p + " %";
  const text2 = props.fossilfree ? "Fossil free!" : "Renewable!";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 250"
      width="250"
      height="250"
    >
      <defs>
        <linearGradient id="gradient" gradientTransform="rotate(0)">
          <stop offset="0%" stopColor="#9599E2" />
          <stop offset="100%" stopColor="#8BC6EC" />
        </linearGradient>
      </defs>
      <circle
        classname="total"
        r="66"
        cx="50%"
        cy="50%"
        stroke="gold"
        stroke-width="5%"
        transform="rotate(-90) translate(-250)"
        position="absolute"
        strokeDasharray={`${c1}, ${c2}`}
        fill="url('#gradient')"
      ></circle>
      <text
        fill="white"
        x="50%"
        y="50%"
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
        y="55%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="1.2em"
        fontFamily="NATS"
      >
        {text2}
      </text>
    </svg>
  );
}

export default Donut;
