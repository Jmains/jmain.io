const ThreeOctagon = ({ ...props }) => {
  return (
    <svg
      {...props}
      width="80"
      height="200"
      viewBox="0 0 80 212"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M80 160.826L56.5948 142H23.5L0 160.826V191.583L23.5 212H56.5948L80 191.583V160.826Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M80 18.8258L56.5948 0H23.5L0 18.8258V49.5833L23.5 70H56.5948L80 49.5833V18.8258Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M80 89.8258L56.5948 71H23.5L0 89.8258V120.583L23.5 141H56.5948L80 120.583V89.8258Z"
        fill="url(#paint2_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="-1.49012e-07"
          y1="177"
          x2="80"
          y2="177"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9C99EF" stopOpacity="0.25" />
          <stop offset="1" stopColor="#F2C3D7" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="-1.49012e-07"
          y1="35"
          x2="80"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F6C5D5" />
          <stop offset="1" stopColor="#9B98EF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="-1.49012e-07"
          y1="106"
          x2="80"
          y2="106"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#88F9E8" />
          <stop offset="1" stopColor="#ABB9E5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ThreeOctagon;
