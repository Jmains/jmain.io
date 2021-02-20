const OctagonCyan = ({ ...props }) => {
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
        fill="url(#paintCyan_linear)"
      />
      <defs>
        <linearGradient
          id="paintCyan_linear"
          x1="80"
          y1="35"
          x2="-12.5"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AABAE5" />
          <stop offset="1" stopColor="#89F8E8" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default OctagonCyan;
