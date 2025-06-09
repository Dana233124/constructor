import React from "react";
import icon2 from "../../assets/2.svg";

const First = () => {
  return (
    <header
      className="first"
      style={{
        backgroundImage: `url(${icon2})`,
        backgroundSize: "1440px 900px", // ← строго фиксированный размер
        backgroundPosition: "center top", // ← не обрезает сверху
        backgroundRepeat: "no-repeat",
        backgroundColor: "#DDD6FF",
        width: "100vw",
        height: "900px", // ← фиксированная высота первого экрана
        paddingTop: "80px",
      }}
    >

      <div className="logo-big">P</div>
      <h1 className="title-main">Создай свой интернет-магазин</h1>
      <button className="btn-create">Создать</button>
      <div className="puzzle-text">Puzzle</div>
    </header>
  );
};

export default First;
