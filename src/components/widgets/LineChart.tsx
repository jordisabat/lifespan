import { Line } from "react-chartjs-2";

const labels = ["2020", "2021", "2022", "2023", "2024", "2025"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Lifespan expected (years)",
      backgroundColor: "rgb(0, 0, 0)",
      borderColor: "rgb(0, 0, 0)",
      data: [80, 81, 83, 82, 82.3, 86, 87],
    },
  ],
};

const LineChart = () => <Line data={data} />;
export default LineChart;
