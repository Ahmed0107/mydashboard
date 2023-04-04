import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const sales = [
  5000, 6000, 8000, 10000, 9000, 7000, 13000, 9000, 8000, 10000, 7000, 13000,
];

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "sales",
      data: sales.map((elm) => elm),
      borderColor: "#5F73E2",
      backgroundColor: "#ffffff",
    },
  ],
  options: {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        color: "red",
        text: "Monthely Sales (US Dollar)",
      },
    },
  },
};

const options = {
  maintainAspectRatio: false,
};

const LineChartStyle = styled(Line)`
  width: 600px;
  height: 400px;
  padding: 5px;

  @media (min-width: 300px) and (max-width: 700px) {
    width: 100%;
    height: 400px;
  }
  /* Tablet */
  @media (min-width: 700px) and (max-width: 1000px) {
    width: 100%;
    height: 400px;
  }
`;

export default function LineChart() {
  return <LineChartStyle data={data} options={options} />;
}
