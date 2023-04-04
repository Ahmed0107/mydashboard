import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 23%;
  height: 120px;
  background-color: #fff;
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem,
    rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem;
  color: rgb(52, 71, 103);

  .card-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    right: 20px;
    /* background: linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25)); */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .statistics {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding: 20px;
  }
  .statistics .statistic-title {
    font-size: 18px;
  }
  .statistics .statistic-amount {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    font-size: 24px;
    font-weight: bold;
    /* border-bottom: 1px solid #bebebe; */
    padding: 10px 0;
  }
  .statistics .statistic-profit {
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    justify-content: flex-start;
    padding: 5px 0;
  }

  .statistics .statistic-profit .pprofit_amount {
    color: green;
    margin-right: 10px;
  }

  /* mobile */
  @media (min-width: 300px) and (max-width: 700px) {
    width: 90%;
  }
  /* Tablet */
  @media (min-width: 700px) and (max-width: 1000px) {
    width: 40%;
  }
`;

export default function DashDataCard({
  title,
  amount,
  profit,
  profit_message,
  icon,
  icon_back_color,
}) {
  return (
    <Card>
      <div className="card-icon" style={{ background: icon_back_color }}>
        {icon}
      </div>
      <div className="statistics">
        <div className="statistic-title">{title}</div>
        <div className="statistic-amount">{amount}</div>
        <div className="statistic-profit">
          <span className="pprofit_amount">{profit}</span> <span>{profit_message}</span>
        </div>
      </div>
    </Card>
  );
}
