// width="1575"
//       height="208"
const TopWaveClear = ({ ...props }) => {
  return (
    <svg {...props} viewBox="0 0 4000 208" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-67 52L37.1667 65C141.333 78 349.667 104 558 125.667C766.333 147.333 974.667 164.667 1183 169C1391.33 173.333 1599.67 164.667 1808 173.333C2016.33 182 2224.67 208 2433 208C2641.33 208 2849.67 182 3058 164.667C3266.33 147.333 3474.67 138.667 3683 138.667C3891.33 138.667 4099.67 147.333 4308 151.667C4516.33 156 4724.67 156 4828.83 156H4933V3.8147e-06H4828.83C4724.67 3.8147e-06 4516.33 3.8147e-06 4308 3.8147e-06C4099.67 3.8147e-06 3891.33 3.8147e-06 3683 3.8147e-06C3474.67 3.8147e-06 3266.33 3.8147e-06 3058 3.8147e-06C2849.67 3.8147e-06 2641.33 3.8147e-06 2433 3.8147e-06C2224.67 3.8147e-06 2016.33 3.8147e-06 1808 3.8147e-06C1599.67 3.8147e-06 1391.33 3.8147e-06 1183 3.8147e-06C974.667 3.8147e-06 766.333 3.8147e-06 558 3.8147e-06C349.667 3.8147e-06 141.333 3.8147e-06 37.1667 3.8147e-06H-67V52Z"
        fill="url(#waveLinearClear)"
        fillOpacity="0.34"
      />
      <defs>
        <linearGradient
          id="waveLinearClear"
          x1="2433"
          y1="208"
          x2="2433"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#655CFF" />
          <stop offset="1" stopColor="#655CFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TopWaveClear;
