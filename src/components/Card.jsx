import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="headline-title">
        Average PR size <i className="fa-solid fa-circle-info"></i>
      </div>
      <div className="stat-content">
        <div className="line__change">
          <div>
            <span className="text-bold">968</span> lines
          </div>
          <span className="caption">Line Change</span>
        </div>
        <div className="line__change">
          <div>
            <span className="text-bold">968</span> kb
          </div>
          <span className="caption">Size</span>
        </div>
      </div>
      <div className="growth">
        <i className="fa-solid fa-arrow-up"></i> <span>23%</span>
      </div>
    </div>
  );
};

export default Card;
