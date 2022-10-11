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

const Bar2 = () => {
  const data1 = [
    { name: "Work Breakdown", newWork: 25, rework: 15, refactor: 40, bugs: 20 },
    // { name: "Rework", value: 15 },
    // { name: "Refactor", value: 40 },
    // { name: "Bugs", value: 20 },
  ];
  const data = [
    { name: "New work", value: 25 },
    { name: "Rework", value: 15 },
    { name: "Refactor", value: 40 },
    { name: "Bugs", value: 20 },
  ];
  const COLORS = ["#4DBD98", "#23B3E8", "#03293D", "#F15832"];

  return (
    <div className="bar">
      <div className="headline-title">
        Work Breakdown <i className="fa-solid fa-circle-info"></i>
      </div>

      <div className="work-content">
        <span>
          <strong className="text-bold">968</strong> lines
        </span>
        <span className="mid-span">
          <strong className="text-bold">54</strong> tickets
        </span>
        <span>
          <strong className="text-bold">4</strong> total weeks worked
        </span>
      </div>

      <div className="barchart">
        <ResponsiveContainer width={500} aspect={9}>
          <BarChart
            layout="vertical"
            
            height={50}
            data={data1}
            margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis hide type="number" />
            <YAxis hide dataKey="name" type="category" />
            <Tooltip />
            <Bar
              dataKey="newWork"
              stackId="a"
              fill="#4DBD98"
              radius={[15, 0, 0, 15]}
            />
            <Bar dataKey="rework" stackId="a" fill="#23B3E8" />
            <Bar dataKey="refactor" stackId="a" fill="#03293D" />
            <Bar
              dataKey="bugs"
              stackId="a"
              fill="#F15832"
              radius={[0, 15, 15, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
        <ul>
          {data.map((x, index) => (
            <li key={index}>
              <span
                className="color-icon"
                style={{ backgroundColor: `${COLORS[index % COLORS.length]}` }}
              ></span>
              <span className="text-bold">{x.value}hrs</span>
              <span>{x.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bar2;
