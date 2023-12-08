import React, { useState } from "react";
import "./FormCard.css";
import { summary } from "../../api";
import SummaryCard from "../SummaryCard/SummaryCard";
import toast, { Toaster } from "react-hot-toast";

function FormCard() {
  const [PitchDeckText, setPitchDeckText] = useState("");
  const [summaryText, setSummaryText] = useState("");

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (PitchDeckText) {
      const newSummary = await summary(PitchDeckText);

      const promise = new Promise((resolve) => {
        setSummaryText(newSummary);
        resolve();
      });

      await toast.promise(promise, {
        loading: "Generating...",
        success: <b>Generated Successfully</b>,
        error: <b>Generating Failed</b>,
      });
    }
  };

  return (
    <form className="form__card" onSubmit={handleGenerate}>
      <textarea
        className="form__input"
        onChange={(e) => setPitchDeckText(e.target.value)}
      ></textarea>
      <button className="form__button">Generate</button>
      <SummaryCard summaryText={summaryText} />
      <Toaster position="top-right" reverseOrder={false} />
    </form>
  );
}

export default FormCard;
