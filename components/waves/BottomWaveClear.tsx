const BottomWaveClear = ({ ...props }) => {
  return (
    <svg {...props} viewBox="0 0 1575 208" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1642 156L1607.79 143C1573.58 130 1505.17 104 1436.75 82.3335C1368.33 60.6668 1299.92 43.3335 1231.5 39.0001C1163.08 34.6668 1094.67 43.3335 1026.25 34.6668C957.833 26.0001 889.417 0.00012207 821 0.00012207C752.583 0.00012207 684.167 26.0001 615.75 43.3335C547.333 60.6668 478.917 69.3335 410.5 69.3335C342.083 69.3335 273.667 60.6668 205.25 56.3335C136.833 52.0001 68.4167 52.0001 34.2083 52.0001H-7.62939e-06V208H34.2083C68.4167 208 136.833 208 205.25 208C273.667 208 342.083 208 410.5 208C478.917 208 547.333 208 615.75 208C684.167 208 752.583 208 821 208C889.417 208 957.833 208 1026.25 208C1094.67 208 1163.08 208 1231.5 208C1299.92 208 1368.33 208 1436.75 208C1505.17 208 1573.58 208 1607.79 208H1642V156Z"
        fill="url(#btmWaveClear)"
        fillOpacity="0.34"
      />
      <defs>
        <linearGradient
          id="btmWaveClear"
          x1="821"
          y1="0.00012207"
          x2="821"
          y2="208"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#655CFF" />
          <stop offset="1" stopColor="#655CFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BottomWaveClear;
