import React from "react";
import styled from "styled-components";
import LineChart from "../reuseableComponents/Chart";

const Card = styled.div`
  width: 49%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem,
    rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;
  color: rgb(52, 71, 103);

  .statistics-chart {
    width: 90%;
    height: 80%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .heading {
    width: 90%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 20px 0;
  }

  .heading h4 {
    margin-top: 10px;
  }

  .heading p {
    margin-top: 10px;
  }

  @media (min-width: 300px) and (max-width: 700px) {
    width: 90%;
  }
  /* Tablet */
  @media (min-width: 700px) and (max-width: 1000px) {
    width: 90%;
  }
`;

export default function DashStatisticsCard({
  title,
  campaign,
  card_back_color,
}) {
  return (
    <Card>
      <div className="heading">
        <h4>{title}</h4>
        <p>{campaign}</p>
      </div>
      <div className="statistics-chart">
        <LineChart />
      </div>
    </Card>
  );
}
