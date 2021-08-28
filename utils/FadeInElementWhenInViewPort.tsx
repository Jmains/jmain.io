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

interface FadeInProps {
  children: ReactNode | ReactNode[] | Component[];
  fadeInDirection?: string;
  className?: string;
}

export const FadeInElementWhenInViewPort: FC<FadeInProps> = ({
  children,
  fadeInDirection = "",
  className,
}) => {
  const [isVisible, setVisible] = useState(false);
  const nodeRef = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: any) => {
        if (!entries[0].isIntersecting) return;

        setVisible(true);
        if (nodeRef.current) {
          observer.unobserve(nodeRef.current);
        }
      },
      { threshold: 0.25 }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    return () => {
      if (nodeRef.current) observer.unobserve(nodeRef.current);
    };
  }, [isVisible]);

  const rootClassName = cn(
    "transition-transform transition-opacity ease-in-out duration-1000 transform",
    {
      "opacity-100 visible translate-x-0": isVisible,
      [`${fadeInDirection} invisible opacity-0`]: !isVisible,
    },
    className
  );

  return (
    <div className={rootClassName} ref={nodeRef}>
      {children}
    </div>
  );
};
