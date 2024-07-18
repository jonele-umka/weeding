import React from "react";
import styles from "./SliderNames.module.css";
import name1 from "../../../assets/name1.png";
import name2 from "../../../assets/name2.png";
import name3 from "../../../assets/name3.png";
import name4 from "../../../assets/name4.png";
import name5 from "../../../assets/name5.png";
import name6 from "../../../assets/name6.png";

function SliderNames() {
  return (
    <div class={styles.sliderNames}>
      <div class={styles.slideTrack}>
        <div class={styles.slide}>
          <img src={name1} alt="" />
        </div>
        <div class={styles.slide}>
          <img src={name2} alt="" />
        </div>
        <div class={styles.slide}>
          <img src={name3} alt="" />
        </div>
        <div class={styles.slide}>
          <img src={name4} alt="" />
        </div>
        <div class={styles.slide}>
          <img src={name5} alt="" />
        </div>
        <div class={styles.slide}>
          <img src={name6} alt="" />
        </div>
        <div class={styles.slide}>
          <img src={name1} alt="" />
        </div>
        <div class={styles.slide}>
          <img src={name2} alt="" />
        </div>
        <div class={styles.slide}>
          <img src={name3} alt="" />
        </div>
        <div class={styles.slide}>
          <img src={name4} alt="" />
        </div>
        <div class={styles.slide}>
          <img src={name5} alt="" />
        </div>
        <div class={styles.slide}>
          <img src={name6} alt="" />
        </div>
        <div class={styles.slide}>
          <img src={name1} alt="" />
        </div>
        <div class={styles.slide}>
          <img src={name2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SliderNames;
