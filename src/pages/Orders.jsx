import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Tabel from "../components/reuseableComponents/Tabel";
import { Wrraper } from "../layout/Wrraper";

const OrdersWrraper = styled.div`
  width: 100%;
  height: 590px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 40px;
  position: relative;
  background-color: #fff;
  border-radius: 10px;

  .orders-heading {
    width: 98%;
    height: 60px;
    position: absolute;
    top: -30px;
    color: #fff;
    border-radius: 10px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    background: linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));
  }
`;

export default function Orders({ activeLink, setActiveLink }) {
  
      useEffect(() => {
        setActiveLink("Orders");
      });
  
  const users = [
    {
      username: "ahmed",
      email: "ahmed.samedjhgbh01094@gmail.com",
      orders: [
        {
          title: "Dessll Laptop",
        },
        {
          title: "Bts Headphone",
        },
      ],
      paymentState: "pending",
    },
    {
      username: "ahmed",
      email: "ahmed.samedjhgbh01094@gmail.com",
      orders: [
        {
          title: "as Lssfaptop",
        },
        {
          title: "Btscs Hesfadphone",
        },
      ],
      paymentState: "pending",
    },
  ];

  return (
    <Wrraper>
      <OrdersWrraper>
        <div className="orders-heading">
          <h2>Orders</h2>
        </div>
        <Tabel users={users} />
      </OrdersWrraper>
    </Wrraper>
  );
}
