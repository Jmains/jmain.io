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
}

export const FadeInElementWhenInViewPort: FC<ToastProps> = ({ children, fadeInDirection }) => {
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
  }, []);

  const rootClassName = cn("transition-all ease-in-out duration-700", {
    transform: true,
    "opacity-100 translate-x-0 animate-pulse": isVisible,
    [`opacity-0 ${fadeInDirection ? fadeInDirection : "translate-x-20"}`]: !isVisible,
  });

  return (
    <div className={rootClassName} ref={nodeRef}>
      {children}
    </div>
  );
};
