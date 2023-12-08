import React, { useState } from "react";
import "./FormCard.css";
import { summary } from "../../api";
import SummaryCard from "../SummaryCard/SummaryCard";
function FormCard() {
  const [PitchDeckText, setPitchDeckText] = useState("");
  const [summaryText, setSummaryText] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleGenerate = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (PitchDeckText) {
      const newSummary = await summary(PitchDeckText);
      setSummaryText(newSummary);
      setLoading(false);
    }
  };

  return (
    <form className="form__card" onSubmit={handleGenerate}>
      <textarea
        className="form__input"
        onChange={(e) => setPitchDeckText(e.target.value)}
      ></textarea>
      <button className="form__button">
        {!isLoading ? "Generate" : "Generating..."}
      </button>
      <SummaryCard summaryText={summaryText} />
    </form>
  );
}

export default FormCard;
