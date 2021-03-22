import { X } from "@components/icons";
import { useUIDispatch, useUIState } from "@components/ui/context";
import cn from "classnames";
import { ReactNode, FC, useEffect } from "react";

interface ToastProps {
  className?: string;
  title: string;
  description?: string;
  hide?: boolean;
  action?: ReactNode;
}

const Toast: FC<ToastProps> = ({ title, description, className, action, hide }) => {
  const uiDispatch = useUIDispatch();
  const { displayToast } = useUIState();

  useEffect(() => {
    if (displayToast) {
      setTimeout(() => {
        uiDispatch({ type: "CLOSE_TOAST" });
      }, 4000);
    }
  }, [displayToast]);

  const rootClassName = cn(
    "text-center p-4 mt-24 bg-green-400 text-sm flex justify-center items-center font-medium fixed top-0 left-0 right-0 w-full max-w-sm mx-auto rounded-lg z-50 transition-all duration-300 ease-out md:flex md:text-left",
    {
      transform: true,
      "translate-y-0 opacity-100": !hide,
      "translate-y-full opacity-0": hide,
    },
    className
  );
  return (
    <dialog className={rootClassName}>
      <span className="block">{title}</span>
      <button
        type="button"
        name="close toast message"
        className="hover:bg-green-700 bg-green-900 rounded-full p-0.5 ml-2"
        onClick={() => {
          if (displayToast) {
            uiDispatch({ type: "CLOSE_TOAST" });
          }
        }}
      >
        <X className="h-5 w-5 fill-current text-white" />
      </button>
    </dialog>
  );
};

export default Toast;
