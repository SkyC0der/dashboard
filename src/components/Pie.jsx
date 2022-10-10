import React from "react";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const PieCard = () => {
  const data = [
    { name: "Coding", value: 4 },
    { name: "Code Review", value: 8 },
    { name: "QA Review", value: 1 },
    { name: "Idle Time", value: 3 },
    { name: "Deployment", value: 1 },
  ];
  const COLORS = ["#4DBD98", "#23B3E8", "#03293D", "#F15832", "#826AF9"];

  return (
    <div className="pie">
      <div className="heading">
        <div className="headline-title">
          Cycle Time <i class="fa-solid fa-circle-info"></i>
        </div>

        <div className="chart">
          <PieChart width={300} height={250}>
            <Pie
              data={data}
              cx={120}
              cy={120}
              innerRadius={70}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
              legendType="circle"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>

          <ul>
            {data.map((x, index) => (
                <li key = {index}>
                    <span className = "color-icon" style={{backgroundColor: `${COLORS[index % COLORS.length]}`}}></span>
                    <span className="text-bold">{x.value}hrs</span>
                    <span>{x.name}</span>
                </li>
            ))}
          </ul>

          <div className="caption-container">
          <span className="text-bold">
            {data.map((x) => x.value).reduce((a,b) => a+b)} hrs spent
          </span>
          <span className="caption">
          Average across 50 tickets in 4 weeks
          </span>
          </div>
        </div>

        <div className="growth">
        <i class="fa-solid fa-arrow-up"></i> <span>24%</span>
        </div>
      </div>
    </div>
  );
};

export default PieCard;
