// src/components/Invitation.js
import React from "react";
import mainImg from "../../assets/ттт.png";
import "./Main.css";
import Countdown from "../Countdown/Countdown";
import Header from "../Header/Header";

const Main = () => (
  <section className="main">
    <div className="main-container">
      <div className="main-content">
        <Header />
        {/* <div className="date-box">
        <h1 className="date">19</h1>
        <h1 className="date">09</h1>
        <h1 className="date">24</h1>
      </div> */}
        {/* <img src={mainImg} alt="main" /> */}
        <div className="svg-border">
          <svg width="100%" height="100%">
            <rect
              className="line"
              x="0"
              y="0"
              width="100%"
              height="100%"
            ></rect>
          </svg>
        </div>
        <div className="mainText">
          {/* <h1 className="invitationText">Чакыруу кат</h1> */}
          <div className="names">
            <h1>Урмат & Жумагуль</h1>
          </div>
          <div className="date">
            <h1>19.09.2024</h1>
          </div>
        </div>

        <div className="countdown-container">
          <Countdown />
        </div>
      </div>
    </div>
  </section>
);

export default Main;
