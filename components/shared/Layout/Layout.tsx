import { FC } from "react";
import cn from "classnames";
import s from "./Layout.module.css";
import Navbar from "../Navbar";
import { FooterSection } from "@components/sections";
// import Modal from "@components/ui/Modal";
// import { useUIDispatch, useUIState } from "@components/ui/context";
// import { LoginView, RegisterView, ForgotPassView } from "@components/auth";
// import { modalViews } from "@components/ui/context";

const Layout: FC = ({ children }) => {
  // const uiDispatch = useUIDispatch();
  // const { displayModal, modalView } = useUIState();

  // const closeModal = () => {
  //   uiDispatch({ type: "CLOSE_MODAL" });
  // };

  return (
    <div
      className={cn("h-full bg-white mx-auto transition-colors duration-150 max-w-screen-2xl")}
    >
      <Navbar />
      {/* <PageHeader /> */}
      <main className="antialiased overflow-hidden grid-cols-1 lg:grid-cols-4">
        {children}
      </main>
      <div className="bg-gray-100">
        <div className="grid grid-cols-1 mx-4 border-gray-200 border-l-2 border-r-2 lg:grid-cols-4">
          <FooterSection />
        </div>
      </div>

      {/* <Sidebar open={displaySidebar} onClose={closeSidebar}>
    <CartSidebarView />
  </Sidebar> */}

      {/* <Modal open={displayModal} onClose={closeModal}>
        {modalView === modalViews.LOGIN_VIEW && <LoginView />}
        {modalView === modalViews.REGISTER_VIEW && <RegisterView />}
        {modalView === modalViews.FORGOT_PASS_VIEW && <ForgotPassView />} */}
      {/* {modalView === modalViews.CREATE_STUDY_GROUP_VIEW && <CreateStudyGroupView} */}
      {/* </Modal> */}

      {/* <FeatureBar
    title="This site uses cookies to improve your experience. By clicking, you agree to our Privacy Policy."
    hide={acceptedCookies}
    action={
      <Button className="mx-5" onClick={() => onAcceptCookies()}>
        Accept cookies
      </Button>
    }
  /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
