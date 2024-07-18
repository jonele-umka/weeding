// src/App.js
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Countdown from "./components/Countdown/Countdown";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Address from "./components/Address/Address";
import Slider from "./components/Slider/Slider";
import SliderNames from "./components/Slider/SliderNames/SliderNames";
import SliderNamesLeft from "./components/Slider/SliderNamesLeft/SliderNamesLeft";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Main />
        <SliderNames />
        <Content />
        <SliderNamesLeft />
        <Address />
        <Footer />
      </div>
    </div>
  );
}

export default App;
