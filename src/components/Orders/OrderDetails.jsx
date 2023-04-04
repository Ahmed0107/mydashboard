import React from "react";
import styled from "styled-components";
import { Wrraper } from "../../layout/Wrraper";
import OrdersProdsTabel from "./OrdersProdsTabel";
import userImg from "./demoImg.jpg";

const OrderDetailaWrraper = styled.div`
width: 100%;
  max-width: 100%;
  min-height: 92%;
  font-size: 18px;
  margin-top: 30px;
  overflow: auto;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  border: 1px solid;

  /* Mobile */
  @media (min-width: 300px) and (max-width: 700px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-around;
  }
  /* Tablet */
  @media (min-width: 700px) and (max-width: 1000px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-around;
  }
`;

const OrderData = styled.div`
  width: 70%;
  height: 100%;
  background-color: #fff;
  margin-right: 10px;
  border-radius: 10px;
  padding: 20px;

  @media (min-width: 300px) and (max-width: 700px) {
    width: 90%;
    overflow: auto;
    height: fit-content;
    margin-top: 20px;

    h2 {
      font-size: 20px;
    }
  }
  /* Tablet */
  @media (min-width: 700px) and (max-width: 1000px) {
    width: 90%;
    margin-top: 20px;

    h2 {
      font-size: 24px;
    }
  }
`;

const UserData = styled.div`
  width: 30%;
  height: 50%;
  background-color: #fff;
  margin-left: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .user-name {
    font-size: 24px;
  }

  .user-email {
    font-size: 18px;
  }

  .user-phone {
    font-size: 18px;
  }

  @media (min-width: 300px) and (max-width: 700px) {
    width: 60%;
    height: 200px;

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
  }

  /* Tablet */
  @media (min-width: 700px) and (max-width: 1000px) {
    width: 50%;
    height: 250px;
  }
`;

export default function OrderDetails({ orders }) {
  const orderedProds = [
    {
      title: "Dell Laptop",
      price: 20,
      quantity: 4,
      total: 80,
      paymentState: "Pending",
    },
    {
      title: "Dell Laptop",
      price: 20,
      quantity: 4,
      total: 80,
      paymentState: "Pending",
    },
  ];
  return (
    <Wrraper>
      <OrderDetailaWrraper>
        <OrderData>
          <h2>Order Details</h2>
          <OrdersProdsTabel orderedProducts={orderedProds} />
        </OrderData>
        <UserData>
          <img src={userImg} alt="" />
          <div className="user-name">Ahmed Sameh</div>
          <div className="user-email">ahmed.sameh01094@gmail.com</div>
          <div className="user-phone">(+20) 1155684256</div>
        </UserData>
      </OrderDetailaWrraper>
    </Wrraper>
  );
}
