import React from "react";

import "./Modal.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ show, onBackdropClick, children }) => (
  <>
    <Backdrop show={show} onClick={onBackdropClick} />
    <div
      className={"Modal"}
      style={{
        transform: show ? "translateY(0)" : "translateY(-100vh)",
        opacity: show ? "1" : "0"
      }}
    >
      {children}
    </div>
  </>
);

const isShowUnchanged = (prevProps, nextProps) =>
  prevProps.show === nextProps.show &&
  prevProps.children === nextProps.children;

export default React.memo(Modal, isShowUnchanged);
