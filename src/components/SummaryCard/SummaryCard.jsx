import React from "react";
import "./SummaryCard.css";
import Loading from "../Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

function SummaryCard({ summaryText }) {
  const handleCopy = () => {
    const summaryOutput = document.querySelector(".summary__output");
    if (summaryOutput) {
      const textToCopy = summaryOutput.innerText;

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          toast.success("Copied to clipboard!");
        })
        .catch((err) => {
          console.error("Unable to copy to clipboard:", err);
        });
    }
  };

  return (
    <div className="summary__card">
      {summaryText ? (
        <div className="summary__output__container">
          <div disabled className="summary__output">
            {summaryText}
          </div>
          <button className="copy__btn" onClick={handleCopy}>
            {" "}
            <FontAwesomeIcon
              icon={faCopy}
              style={{
                color: "white",
                fontSize: "1em",
                paddingRight: "0.5rem",
              }}
            />
            Copy
          </button>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default SummaryCard;
