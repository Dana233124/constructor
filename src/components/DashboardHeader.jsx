// DashboardHeader.jsx
import React from "react";
import icon15 from "../../assets/15.svg";
import icon16 from "../../assets/16.svg";

const DashboardHeader = () => {
  return (
    <header className="dashboard-header">
      <div className="logo-small">Puzzle</div>
      
      {/* Простая проверка: добавим рамку и большой размер */}
      <div className="header-icons">
        <img src={icon15} alt="icon15" style={{ width: "60px", height: "60px", border: "2px solid red" }} />
        <img src={icon16} alt="icon16" style={{ width: "60px", height: "60px", border: "2px solid blue" }} />
      </div>
    </header>
  );
};

export default DashboardHeader;
