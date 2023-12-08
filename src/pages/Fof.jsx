import React from "react";
import "../styles/fof.css";
import FofImage from "../assets/images/404.gif";
function Fof() {
  return (
    <div className="fof">
      <div className="fof__card">
        <img src={FofImage} alt="404" />
        <button className="form__button">Home</button>
      </div>
    </div>
  );
}

export default Fof;
