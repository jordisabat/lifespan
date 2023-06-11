import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["2020", "2021", "2022", "2023", "2024", "2025"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Estimation energy & stamina",
        backgroundColor: "rgb(93, 93, 93)",
        borderColor: "rgb(93, 93, 93)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
