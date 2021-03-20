import { createContext, FC, useContext, useMemo, useReducer } from "react";

type Action =
  | {
      type: "OPEN_TOAST";
    }
  | {
      type: "CLOSE_TOAST";
    }
  | {
      type: "SET_TOAST_TEXT";
      text: ToastText;
    };

type Dispatch = (action: Action) => void;
interface State {
  displayToast: boolean;
  toastText: string;
}
type UIProviderProps = { children: React.ReactNode };

const initialState = {
  displayToast: false,
  toastText: "",
};

type ToastText = string;

const UIStateContext = createContext<State | undefined>(initialState);
const UIDispatchContext = createContext<Dispatch | undefined>(undefined);

// UIStateContext.displayName = "UIContext";

function uiReducer(state: State, action: Action) {
  switch (action.type) {
    case "OPEN_TOAST": {
      return {
        ...state,
        displayToast: true,
      };
    }
    case "CLOSE_TOAST": {
      return {
        ...state,
        displayToast: false,
      };
    }

    case "SET_TOAST_TEXT": {
      return {
        ...state,
        toastText: action.text,
      };
    }
  }
}

const UIProvider = ({ children }: UIProviderProps) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  // const openToast = () => dispatch({ type: "OPEN_TOAST" });
  // const closeToast = () => dispatch({ type: "CLOSE_TOAST" });

  // const stateValues = useMemo(
  //   () => ({
  //     ...state,
  // openDropdown,
  // closeDropdown,
  // openModal,
  // closeModal,
  // setModalView,
  // openToast,
  // closeToast,
  //   }),
  //   [state]
  // );

  return (
    <UIStateContext.Provider value={state}>
      <UIDispatchContext.Provider value={dispatch}>{children}</UIDispatchContext.Provider>
    </UIStateContext.Provider>
  );
};

const useUIState = () => {
  const context = useContext(UIStateContext);
  if (context === undefined) {
    throw new Error(`useUIState must be used within a UIProvider`);
  }
  return context;
};

const useUIDispatch = () => {
  const context = useContext(UIDispatchContext);
  if (context === undefined) {
    throw new Error(`useUIDispatch must be used within a UIProvider`);
  }
  return context;
};

export { useUIDispatch, useUIState, UIProvider };
