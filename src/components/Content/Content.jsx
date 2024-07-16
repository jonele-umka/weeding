import React from "react";
import "./Content.css";
import mainImg from "../../assets/ттт.png";
import Slider from "../Slider/Slider";
function Content() {
  return (
    <div className="content">
      <div className="content-box">
        <div className="content-title">
          <h1>Кадырлуу конок</h1>
          <p>
            2024-жылдын 19-сентябрында биздин жашообуздагы эң маанилүү майрам –
            үйлөнүү үлпөт күнүбүз болоорун сиздерге кубануу менен билдиребиз!
            Сиздерди ушул унутулгус күндүн кубанычын биз менен бөлүшүүгө
            чакырабыз.
          </p>
        </div>
        {/* <div className="content-address">
          <p>19.09.2024 саат 18:00</p>
          <p>Ресторан Palazzo</p>
          <p>Сухэ-Батора, 3/2</p>
        </div> */}
        <Slider />
      </div>
    </div>
  );
}

export default Content;
