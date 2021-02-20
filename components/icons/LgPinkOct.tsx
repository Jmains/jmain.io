const LgPinkOct = ({ ...props }) => {
  return (
    <svg
      {...props}
      width="192"
      height="182"
      viewBox="0 0 192 182"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 133.053L59.5 182H132.46L192 133.053V53.0833L132.46 0H59.5L0 53.0833V133.053Z"
        fill="url(#paintLgPOct_linear)"
      />
      <defs>
        <linearGradient
          id="paintLgPOct_linear"
          x1="-13"
          y1="91"
          x2="192"
          y2="91"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9796F0" stopOpacity="0.49" />
          <stop offset="1" stopColor="#FBC7D4" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LgPinkOct;
