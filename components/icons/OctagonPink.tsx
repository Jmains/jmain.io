const OctagonPink = ({ ...props }) => {
  return (
    <svg {...props} width="80" height="70" viewBox="0 0 80 70" fill="none">
      <path
        d="M80 18.8258L56.5948 0H23.5L0 18.8258V49.5833L23.5 70H56.5948L80 49.5833V18.8258Z"
        fill="url(#paintPink_linear)"
      />
      <defs>
        <linearGradient
          id="paintPink_linear"
          x1="80"
          y1="35"
          x2="-6"
          y2="35"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9796F0" />
          <stop offset="1" stopColor="#FBC7D4" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default OctagonPink;
