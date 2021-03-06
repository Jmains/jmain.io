const OctagonClear = ({ ...props }) => {
  return (
    <svg
      {...props}
      width="80"
      height="70"
      viewBox="0 0 80 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M80 18.8258L56.5948 0H23.5L0 18.8258V49.5833L23.5 70H56.5948L80 49.5833V18.8258Z"
        fill="url(#paintClear_linear)"
      />
      <defs>
        <linearGradient
          id="paintClear_linear"
          x1="-1.49012e-07"
          y1="35"
          x2="80"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9C99EF" stopOpacity="0.25" />
          <stop offset="1" stopColor="#F2C3D7" stopOpacity="0.25" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default OctagonClear;
