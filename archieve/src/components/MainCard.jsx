import React from "react";
import DisplayCard from "./DisplayCard";

export default function MainCard() {
  return (
    <div>
      <div className="main_card">
        <div className="controls_section">
          <div className="circles">
            <div className="circle circle1"></div>
            <div className="circle circle2"></div>
            <div className="circle circle3"></div>
          </div>
          <div className="squares">
            <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-left"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="#2c3e50"
                fill="none"
                strokeCap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </div>
            <div className="square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-right"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="#2c3e50"
                fill="none"
                strokeCap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </div>
          </div>
          <div className="url_bar">
            <input
              type="text"
              value="https://www.thecodinghacker.com"
              disabled
            />
          </div>
          <div className="refresh">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-refresh"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="#2c3e50"
              fill="none"
              strokeCap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
              <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
            </svg>
          </div>
        </div>
        <div className="content_section">
          <div className="content">
            <div className="details">
              <div className="name">Karthik Shettigar</div>
              <div className="designation">
                Software Engineer | Ethical Hacker
              </div>
            </div>
          </div>
          <div className="profile">
            <div className="image">
              <img src="../src/assets/My_Pic.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
