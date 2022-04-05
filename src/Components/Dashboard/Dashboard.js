import React from "react";
import {
  Line,
  LineChart,
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MyLineChart = () => {
  const data = [
    {
      name: "March",
      investment: 100000,
      sales: 241,
      amt: 2400,
    },
    {
      name: "April",
      investment: 200000,
      sales: 423,
      amt: 2210,
    },
    {
      name: "May",
      investment: 300000,
      sales: 741,
      amt: 2290,
    },
    {
      name: "June",
      investment: 400000,
      sales: 529,
      amt: 2000,
    },
    {
      name: "July",
      investment: 500000,
      sales: 601,
      amt: 2181,
    },
    {
      name: "August",
      investment: 600000,
      sales: 767,
      amt: 2500,
    },
  ];
  return (
    <>
      <h1> Welcome to explore my chart</h1>
      <h1>Line Chart</h1>
      <LineChart width={800} height={500} data={data}>
        <Line dataKey={"investment"}></Line>
        <Line dataKey={"sales"}></Line>
        <XAxis dataKey="name"></XAxis>
        <Tooltip />
        <YAxis></YAxis>
      </LineChart>
      <h1>Bar Chart</h1>
      <BarChart width={550} height={340} data={data}>
        <Bar dataKey="sales" fill="#8884d8" />
        <XAxis dataKey="name"></XAxis>
      </BarChart>
    </>
  );
};

export default MyLineChart;
