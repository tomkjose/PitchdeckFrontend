import React, { useEffect, useState } from "react";
import { history } from "../api";
import "../styles/history.css";
function History() {
  const [apiHistory, setApiHistory] = useState([]);
  useEffect(() => {
    const getHistory = async () => {
      const fetchHistory = await history();
      setApiHistory(fetchHistory);
    };
    getHistory();
  }, []);
  return (
    <div className="history">
      <div className="history__heading">
        <span>Pitch Deck</span>
        <span>Summary</span>
      </div>
      {apiHistory &&
        apiHistory.map((data) => {
          return (
            <div className="history__card" key={data._id}>
              <div className="history__inputs">{data.pitchDeck}</div>
              <div className="history__outputs">{data.summary}</div>
            </div>
          );
        })}
    </div>
  );
}

export default History;
