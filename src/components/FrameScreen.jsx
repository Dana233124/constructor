import React from "react";
import Header from "./FrameParts/Header";
import First from "./FrameParts/First";
import Footer from "./FrameParts/Footer";
import "./style.css";


const FrameScreen = () => {
  return (
    <>
      <Header />
      <div className="frame">
        <First />
        <Footer />
      </div>
    </>
  );
};



export default FrameScreen;
