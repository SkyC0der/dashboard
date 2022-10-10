import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Idle = () => {
  const data = [
    {
      name: "Coding",
      daily: 10,
      weekly: 15,
    },
    {
      name: "Code Review",
      daily: 5,
      weekly: 7,
    },
    {
      name: "QA Review",
      daily: 6,
      weekly: 10,
    },
  ];
  const data2 = [
    { name: "Idle", color: "#03293d1a" },
    { name: "Productive", color: "#4DBD98" },
  ];
  return (
    <div className="idleBar">
      <div className="headline-title">
        <div>
          Idle Time Breakdown <i className="fa-solid fa-circle-info"></i>
        </div>
        <ul>
          {data2.map((x, index) => (
            <li key={index}>
              <span
                className="color-icon"
                style={{ backgroundColor: `${x.color}` }}
              ></span>
              <span>{x.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="charts">
          <BarChart
            width={500}
            height={200}
            data={data}
            barGap={6}
            barSize={30}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            {/* <YAxis /> */}
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="daily" fill="#03293d1a" />
            <Bar dataKey="weekly" fill="#4DBD98" />
          </BarChart>
      </div>
    </div>
  );
};

export default Idle;
