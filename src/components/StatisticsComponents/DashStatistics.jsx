import React from "react";
import styled from "styled-components";
import DashStatisticsCard from "./DashStatisticsCard";

const CardStatisticsWrraper = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  
  @media (min-width: 300px) and (max-width: 1000px) {
    min-height: 1200px;
    margin-top: 50px;
    flex-direction: column;
    gap: 40px;
  }

`;

export default function DashStatistics() {
  return (
    <CardStatisticsWrraper>
      <DashStatisticsCard
        title="Dialy Sales"
        campaign={`(+15%) increase in today sales`}
      />
      <DashStatisticsCard
        title="Website Views"
        campaign="Last Campaign Performance"
      />

    </CardStatisticsWrraper>
  );
}
