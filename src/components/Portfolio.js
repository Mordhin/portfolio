import React from "react";
import { Hops } from "./Projects/Hops";
import { Pokedex } from "./Projects/Pokedex";

export const Portfolio = () => {
  return (
    <div className="portfolio wrapper">
      <Hops />
      <div className="line"></div>
      <Pokedex />
    </div>
  );
};
