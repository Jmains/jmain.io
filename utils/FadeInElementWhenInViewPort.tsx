import { FC, useEffect, useRef, useState } from "react";
import cn from "classnames";

export const FadeInElementWhenInViewPort: FC = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          if (domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current!);
      }
    };
  }, []);

  return (
    <div
      className={cn("opacity-0 duration-1000 translate-x-20 transform ease-in-out", {
        "opacity-100 transform-none": isVisible,
      })}
      ref={domRef}
    >
      {children}
    </div>
  );
};
