import { createContext, FC, useContext, useEffect, useMemo, useReducer, useRef } from "react";

type Action =
  | {
      type: "SCROLL_TO_HOME";
    }
  | {
      type: "SCROLL_TO_FT_PROJ";
    }
  | {
      type: "SCROLL_TO_PROJECTS";
    }
  | {
      type: "SCROLL_TO_SKILLS";
    }
  | {
      type: "SCROLL_TO_ABOUT";
    };

type Dispatch = (action: Action) => void;
type State = {
  inHomeView: boolean;
  inFtProjectView: boolean;
  inProjectsView: boolean;
  inSkillsView: boolean;
  inAboutView: boolean;
};
type ScrollToProviderProps = { children: React.ReactNode };

const initialState = {
  inHomeView: true,
  inFtProjectView: false,
  inProjectsView: false,
  inSkillsView: false,
  inAboutView: false,
};

const ScrollToStateContext = createContext<State | undefined>(initialState);
const ScrollToDispatchContext = createContext<Dispatch | any>(undefined);

ScrollToStateContext.displayName = "ScrollToContext";

function scrollToReducer(state: State, action: Action) {
  switch (action.type) {
    case "SCROLL_TO_HOME": {
      return {
        ...state,
        inHomeView: true,
        inFtProjectView: false,
        inProjectsView: false,
        inSkillsView: false,
        inAboutView: false,
      };
    }
    case "SCROLL_TO_FT_PROJ": {
      return {
        ...state,
        inHomeView: false,
        inFtProjectView: true,
        inProjectsView: false,
        inSkillsView: false,
        inAboutView: false,
      };
    }
    case "SCROLL_TO_PROJECTS": {
      return {
        ...state,
        inHomeView: false,
        inFtProjectView: false,
        inProjectsView: true,
        inSkillsView: false,
        inAboutView: false,
      };
    }
    case "SCROLL_TO_SKILLS": {
      return {
        ...state,
        inHomeView: false,
        inFtProjectView: false,
        inProjectsView: false,
        inSkillsView: true,
        inAboutView: false,
      };
    }
    case "SCROLL_TO_ABOUT": {
      return {
        ...state,
        inHomeView: false,
        inFtProjectView: false,
        inProjectsView: false,
        inSkillsView: false,
        inAboutView: true,
      };
    }
  }
}

const ScrollToProvider = ({ children }: ScrollToProviderProps) => {
  const [state, dispatch] = useReducer(scrollToReducer, initialState);

  let homeSection: HTMLElement | null;
  let ftProjSection: HTMLElement | null;
  let projectsSection: HTMLElement | null;
  let skillsSection: HTMLElement | null;
  let aboutSection: HTMLElement | null;

  useEffect(() => {
    homeSection = document.getElementById("homeSection");
    ftProjSection = document.getElementById("ftProjSection");
    projectsSection = document.getElementById("projectsSection");
    skillsSection = document.getElementById("skillsSection");
    aboutSection = document.getElementById("aboutSection");
  }, []);

  const scrollToHomeSection = () => {
    dispatch({ type: "SCROLL_TO_HOME" });
    homeSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToFtProjSection = () => {
    dispatch({ type: "SCROLL_TO_FT_PROJ" });
    ftProjSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToProjectsSection = () => {
    dispatch({ type: "SCROLL_TO_PROJECTS" });
    projectsSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToSkillsSection = () => {
    dispatch({ type: "SCROLL_TO_SKILLS" });
    skillsSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToAboutSection = () => {
    dispatch({ type: "SCROLL_TO_ABOUT" });
    aboutSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // const openDropdown = () => dispatch({ type: "OPEN_DROPDOWN" });
  // const closeDropdown = () => dispatch({ type: "CLOSE_DROPDOWN" });

  // const openModal = () => dispatch({ type: "OPEN_MODAL" });
  // const closeModal = () => dispatch({ type: "CLOSE_MODAL" });

  // const openToast = () => dispatch({ type: "OPEN_TOAST" });
  // const closeToast = () => dispatch({ type: "CLOSE_TOAST" });

  // const setModalView = (view: MODAL_VIEWS) => dispatch({ type: "SET_MODAL_VIEW", view });

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

  const dispatchValues = useMemo(
    () => ({
      scrollToHomeSection,
      scrollToFtProjSection,
      scrollToProjectsSection,
      scrollToSkillsSection,
      scrollToAboutSection,
    }),
    [state]
  );

  return (
    <ScrollToStateContext.Provider value={state}>
      <ScrollToDispatchContext.Provider value={dispatchValues}>
        {children}
      </ScrollToDispatchContext.Provider>
    </ScrollToStateContext.Provider>
  );
};

const useScrollToState = () => {
  const context = useContext(ScrollToStateContext);
  if (context === undefined) {
    throw new Error(`useScrollToState must be used within a ScrollToProvider`);
  }
  return context;
};

const useScrollToDispatch = () => {
  const context = useContext(ScrollToDispatchContext);
  if (context === undefined) {
    throw new Error(`useScrollToDispatch must be used within a ScrollToProvider`);
  }
  return context;
};

export { useScrollToDispatch, useScrollToState, ScrollToProvider };
