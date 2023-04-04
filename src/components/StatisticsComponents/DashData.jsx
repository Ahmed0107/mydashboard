import React from "react";
import { MdAddchart, MdHome, MdPerson, MdShoppingBag } from "react-icons/md";
import styled from "styled-components";
import DashDataCard from "./DashDataCard";

const CardDataWrraper = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* mobile */
  @media (min-width: 300px) and (max-width: 700px) {
    height: 1000px;
    margin-top: 20px;
    gap: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  /* Tablet */
  @media (min-width: 700px) and (max-width: 1000px) {
    width: 100%;
    min-height: 300px;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export default function DashData() {
  return (
    <CardDataWrraper>
      <DashDataCard
        title={`Sales`}
        amount={`3000$`}
        profit={`+12%`}
        profit_message={`Than Yesterday`}
        icon={<MdHome fontSize={35} color="#fff" />}
        icon_back_color={
          "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))"
        }
      />

      <DashDataCard
        title={`Orders`}
        amount={`30`}
        profit={`+8%`}
        profit_message={`Than Last Week`}
        icon={<MdAddchart fontSize={35} color="#fff" />}
        icon_back_color={
          "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"
        }
      />

      <DashDataCard
        title={`Users`}
        amount={`45`}
        profit={`+40%`}
        profit_message={`Than Last Mounth`}
        icon={<MdPerson fontSize={35} color="#fff" />}
        icon_back_color={
          "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))"
        }
      />

      <DashDataCard
        title={`Products`}
        amount={`52`}
        profit={`+13%`}
        profit_message={`Than Last Year`}
        icon={<MdShoppingBag fontSize={35} color="#fff" />}
        icon_back_color={
          "linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))"
        }
      />
    </CardDataWrraper>
  );
}
