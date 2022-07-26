import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import React, { useEffect, useState } from "react";

export default function ChartLine({ Chartdata, coinName }) {
  const [rateData] = useState({
    labels: Chartdata.map((data) => data.time_period_start.split("T")[0]),
    datasets: [
      {
        label: `${coinName}  rate (USD)`,
        data: Chartdata.map((data) => data.rate_close),
        borderColor: "black",
        borderWidth: 2,
        pointRadius: 0,
        hitRadius: 300,
        spanGaps: true,
        stacked: false,
      },
    ],
  });
  return <Line data={rateData} />;
}
