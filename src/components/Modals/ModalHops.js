import React from "react";
import ReactDOM from "react-dom";
import history from "../../history";
import photo from "../../assets/hops.png";

export const ModalHops = (props) => {
  return ReactDOM.createPortal(
    <div onClick={() => history.push("/portfolio")} className="modal">
      <div className="modal_body">
        <i className="fas fa-times"></i>
        <img
          src={photo}
          alt="hops preview"
          onClick={(e) => e.stopPropagation()}
        ></img>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
