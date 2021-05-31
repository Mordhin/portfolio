import React from "react";
import ReactDOM from "react-dom";
import history from "../../history";
import photo from "../../assets/pokedex.png";

export const ModalPokedex = (props) => {
  return ReactDOM.createPortal(
    <div onClick={() => history.push("/portfolio")} className="modal">
      <div className="modal_body">
        <i className="fas fa-times"></i>
        <img
          src={photo}
          alt="pokedex preview"
          onClick={(e) => e.stopPropagation()}
        ></img>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};
