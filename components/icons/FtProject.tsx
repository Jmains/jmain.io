const FtProject = ({ ...props }) => {
  return (
    <svg
      width="68"
      height="63"
      viewBox="0 0 68 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filterFtProj_d)">
        <path
          d="M25.0521 5.78794C28.9277 -0.796848 38.4572 -0.778629 42.3076 5.82092L61.6413 38.9587C65.5351 45.6326 60.7116 54.0128 52.9848 53.998L14.1908 53.9239C6.46409 53.9091 1.67259 45.5105 5.59186 38.8516L25.0521 5.78794Z"
          fill="url(#paintFtProj_linear)"
        />
      </g>
      <defs>
        <filter
          id="filterFtProj_d"
          x="0.17572"
          y="0.804077"
          width="66.9257"
          height="61.2131"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <linearGradient
          id="paintFtProj_linear"
          x1="-8.9199"
          y1="32.9198"
          x2="76.1757"
          y2="33.0824"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7E7CFF" />
          <stop offset="1" stop-color="#DF9AFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FtProject;
