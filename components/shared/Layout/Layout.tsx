import { FC } from "react";
import cn from "classnames";
import s from "./Layout.module.css";
import Navbar from "../Navbar";
import { FooterSection } from "@components/sections";
import Toast from "@components/shared/Toast/Toast";
import { useUIDispatch, useUIState } from "@components/ui/context";
// import Modal from "@components/ui/Modal";
// import { useUIDispatch, useUIState } from "@components/ui/context";
// import { LoginView, RegisterView, ForgotPassView } from "@components/auth";
// import { modalViews } from "@components/ui/context";

const Layout: FC = ({ children }) => {
  const uiDispatch = useUIDispatch();
  const { displayToast, toastText } = useUIState();

  // const closeModal = () => {
  //   uiDispatch({ type: "CLOSE_MODAL" });
  // };

  return (
    <div className={cn("h-full mx-auto font-sans")}>
      <Navbar />
      <main className="antialiased overflow-hidden">{children}</main>
      <FooterSection />

      {/* <Sidebar open={displaySidebar} onClose={closeSidebar}>
    <SideMenuView />
  </Sidebar> */}

      {/* <Modal open={displayModal} onClose={closeModal}>
        {modalView === modalViews.LOGIN_VIEW && <LoginView />}
        {modalView === modalViews.REGISTER_VIEW && <RegisterView />}
        {modalView === modalViews.FORGOT_PASS_VIEW && <ForgotPassView />} */}
      {/* {modalView === modalViews.CREATE_STUDY_GROUP_VIEW && <CreateStudyGroupView} */}
      {/* </Modal> */}

      <Toast hide={!displayToast} text={toastText} />
    </div>
  );
};

export default Layout;
