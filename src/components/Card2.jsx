import React from "react";

const Card2 = () => {
  return (
    <div className="card2">
      <div className="headline-title">
        Average Ticket Duration <i className="fa-solid fa-circle-info"></i>
      </div>
      <div className="stat-content">
        <div className="line__change">
          <div>
            <span className="text-bold">36</span> hours
          </div>
          <span className="caption">Hours Worked</span>
        </div>
       
      </div>
      
      <div className="growth">
        <i className="fa-solid fa-arrow-down"></i> <span>79%</span>
        </div>
    </div>
  );
};

export default Card2;
