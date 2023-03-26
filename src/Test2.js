import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import userData from "./test.csv";
import CarouselComponent from "./CaroselComponent";

export function Test2({}) {
  return (
    <div>
      <h1> This is the carosel test </h1>
      <div
      style={{
        backgroundColor: "#d9d9d9",
        height: "336px",
        width: "698px",
        position: "relative"
      }}
      > 
       <CarouselComponent />
      </div>
    </div>
  );
}
