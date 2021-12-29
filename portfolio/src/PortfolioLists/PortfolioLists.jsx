import React from "react";
import "./PortfolioLists.css";

function PortfolioLists({ img, title }) {
  console.log(img);
  return (
    <div className="portfolioWorks">
      <div className="portfoliolistItem">
        <h3 className="portfoliotitle1">{title}</h3>
        <img src={img} alt="" className="portfolioImgs" />
      </div>
    </div>
  );
}

export default PortfolioLists;
