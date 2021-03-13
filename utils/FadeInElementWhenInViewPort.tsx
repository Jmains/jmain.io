import { FC, useEffect, useRef, useState } from "react";
import cn from "classnames";

export const FadeInElementWhenInViewPort: FC = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const nodeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          if (nodeRef.current) {
            observer.unobserve(nodeRef.current);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    return () => {
      if (nodeRef.current) observer.unobserve(nodeRef.current);
    };
  }, []);

  return (
    <div
      className={cn("opacity-0 duration-700 transition transform-gpu ease-in-out", {
        "opacity-100 ": isVisible,
      })}
      ref={nodeRef}
    >
      {children}
    </div>
  );
};
