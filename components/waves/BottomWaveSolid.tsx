const BottomWaveSolid = ({ ...props }) => {
  return (
    <svg {...props} viewBox="0 0 1575 182" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 70.73L65.8333 52.185C131.667 33.6399 263.333 -3.45013 395 0.258878C526.667 3.96788 658.333 48.4759 790 70.73C921.667 92.984 1053.33 92.984 1185 92.984C1316.67 92.984 1448.33 92.984 1514.17 92.984H1580V182H1514.17C1448.33 182 1316.67 182 1185 182C1053.33 182 921.667 182 790 182C658.333 182 526.667 182 395 182C263.333 182 131.667 182 65.8333 182H0V70.73Z"
        fill="url(#btmWaveSolid)"
      />
      <defs>
        <linearGradient
          id="btmWaveSolid"
          x1="790"
          y1="0.00012207"
          x2="790"
          y2="182"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A885FF" />
          <stop offset="1" stopColor="#141414" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BottomWaveSolid;
