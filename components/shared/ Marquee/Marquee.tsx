import cn from "classnames";
import { FC, ReactNode, Component } from "react";
// import Ticker from "react-ticker";

interface Props {
  className?: string;
  children?: ReactNode[] | Component[] | any[];
}

const Marquee: FC<Props> = ({ className = "", children }) => {
  const rootClassName = cn("w-full relative", className);

  return (
    <div className={rootClassName}>
      {/* <Ticker speed={3} offset={10}>
        {({ index }) => <div className="flex flex-row items-center">{children}</div>}
      </Ticker> */}
    </div>
  );
};

export default Marquee;
