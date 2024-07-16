import React from "react";
import "./Adress.css";
function Address() {
  return (
    <div className="addressBlock">
      <div className="addressContent">
        <div className="addressTitle">
          <h1>Күндүн убактысы</h1>
          <div className="addressText">
            <div className="addressDate">
              <h2 style={{ marginBottom: 5 }}>19.09.2024</h2>
              <h2 style={{ textAlign: "right" }}>18:00</h2>
            </div>
            <div className="address">
              <h2>
                <span>"Palazzo"</span> рестораны
              </h2>
              <h3>Бишкек Сухэ-Батора, 3/2</h3>
              <p>
                Биздин каттоо ушул жерде болот. Баарын ушул салтанаттуу учурду
                биз менен бөлүшүүгө чакырабыз.
              </p>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4992.970609900046!2d74.61855186682094!3d42.824814106875735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb708e0b27491%3A0xcabdc6e5af2469c2!2sPalazzo!5e0!3m2!1sru!2skg!4v1721054203944!5m2!1sru!2skg"
        width="100%"
        height="250"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Address;
