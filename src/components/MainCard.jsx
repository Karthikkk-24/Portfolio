import React from "react";

export default function MainCard() {
  return (
    <div>
      <div className="background"></div>
      <div className="main_card">
        <div className="photo">
          <img src="src/assets/My_Pic.jpg" alt="" />
        </div>
        <div className="contents">
          <h1 className="name">Karthik Shettigar</h1>
          <h2 className="designation">Software Engineer | Ethical Hacking</h2>

          <div className="social_media">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-brands fa-medium"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
