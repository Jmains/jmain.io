// width="1575"
//       height="182"
const TopWaveSolid = ({ ...props }) => {
  return (
    <svg {...props} viewBox="0 0 1575 182" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2312 111.27L2124.5 129.815C1937 148.36 1562 185.45 1187 181.741C812 178.032 437 133.524 62.0001 111.27C-313 89.0161 -688 89.0161 -1063 89.0161C-1438 89.0161 -1813 89.0161 -2000.5 89.0161L-2188 89.0161V0L-2000.5 0C-1813 0 -1438 0 -1063 0C-688 0 -313 0 62.0001 0C437 0 812 0 1187 0C1562 0 1937 0 2124.5 0L2312 0V111.27Z"
        fill="url(#waveLinearSolid)"
      />
      <defs>
        <linearGradient
          id="waveLinearSolid"
          x1="62"
          y1="182"
          x2="62"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A885FF" />
          <stop offset="1" stopColor="#121212" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TopWaveSolid;
