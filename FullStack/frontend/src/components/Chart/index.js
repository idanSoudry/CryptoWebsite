import axios from "axios";
import Chart from "chart.js/auto";
import React, { useEffect, useState } from "react";
import "../../App.css";
import ChartLine from "./data";
import { ChartContainer, ChartWrapper } from "./ChartElements";

function GetRate(coin) {
  return axios.get(`/${coin}`).then((response) => {
    return response.data;
  });
}

export default function ChartData(coin) {
  console.log(coin["coin"]);
  const [Rate, setRate] = useState(null);
  useEffect(() => {
    setRate(null);
    GetRate(coin["coin"]).then((response) => {
      setRate(response);
    });
  }, [1]);

  return (
    <div>
      {null !== Rate ? (
        <div>
          <ChartContainer id={"rate"}>
            <ChartWrapper>
              <ChartLine
                Chartdata={Rate}
                coinName={coin["coin"].replace("rate", "")}
              />
            </ChartWrapper>
          </ChartContainer>
        </div>
      ) : (
        <h5>We are loading the chart. please wait</h5>
      )}
    </div>
  );
}
