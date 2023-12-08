import React from "react";
import "../styles/home.css";
import FormCard from "../components/FormCard/FormCard";

function Home() {
  return (
    <div className="home">
      <h2 className="home__title">Pitch Deck Summary Generator </h2>
      <FormCard />
    </div>
  );
}

export default Home;
