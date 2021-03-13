import { FC, useEffect, useRef, useState } from "react";
import cn from "classnames";
import { motion } from "framer-motion";

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
    <motion.div
      animate={isVisible}
      className={cn(
        "opacity-0 duration-700 transition translate-x-20 transform-gpu ease-in-out",
        {
          "opacity-100 transform-none": isVisible,
        }
      )}
      ref={nodeRef}
    >
      {children}
    </motion.div>
  );
};
