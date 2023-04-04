import React from "react";
import { Wrraper } from "../layout/Wrraper";
import DashData from "../components/StatisticsComponents/DashData";
import DashStatistics from "../components/StatisticsComponents/DashStatistics";
import { useEffect } from "react";

export default function Dashboard({ activeLink, setActiveLink }) {
  useEffect(() => {
    setActiveLink("Dashboard");
  });

  return (
    <Wrraper>
      <DashData />
      <DashStatistics />
    </Wrraper>
  );
}
