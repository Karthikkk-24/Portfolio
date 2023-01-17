import React from "react";
import DisplayCard from "./DisplayCard";

export default function MainCard() {
  return (
    <div>
      <div className="main_card">
        <div className="controls_section">
          <div className="circles">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
        <div className="content_section"></div>
      </div>
    </div>
  );
}
