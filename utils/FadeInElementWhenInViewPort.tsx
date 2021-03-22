import {
  Component,
  FC,
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import cn from "classnames";

interface ToastProps {
  children: ReactNode | ReactNode[] | Component[];
  fadeInDirection?: string;
  className?: string;
}

export const FadeInElementWhenInViewPort: FC<ToastProps> = ({
  children,
  fadeInDirection = "translate-x-20",
  className,
}) => {
  const [isVisible, setVisible] = useState(false);
  const nodeRef = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: any) => {
        console.log("Intersection observer fired");
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
  }, [isVisible]);

  const rootClassName = cn(
    "transition-all ease-in duration-300",
    {
      transform: true,
      "opacity-100": isVisible,
      [`${fadeInDirection} opacity-0`]: !isVisible,
    },
    className
  );

  return (
    <div className={rootClassName} ref={nodeRef}>
      {children}
    </div>
  );
};
