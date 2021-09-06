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
      { threshold: 0.05, root: null, rootMargin: "-100px 0px" }
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }
    return () => {
      if (nodeRef.current) observer.unobserve(nodeRef.current);
    };
  }, [isVisible]);

  const rootClassName = cn(
    className,
    `transition-opacity ease-in-out duration-500 opacity-0`,
    {
      "opacity-100": isVisible,
    }
  );

  return (
    <div className={rootClassName} ref={nodeRef}>
      {children}
    </div>
  );
};
