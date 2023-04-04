import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardWrraper = styled.div`
  width: 18%;
  height: 350px;
  border: 1px solid #aa9898;
  border-radius: 5px;
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff;

  img {
    width: 100%;
    height: 65%;
    border-radius: 5px 5px 0 0;
  }

  .title,
  .price {
    padding: 0 10px;
  }

  .title {
    font-size: 18px;
  }

  .price {
    font-size: 18px;
  }

  .actions {
    width: 100%;
    height: 14%;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 300px) and (max-width: 700px) {
    width: 250px;
    height: 300px;
  }
  /* Tablet */
  @media (min-width: 700px) and (max-width: 1200px) {
    width: 250px;
    height: 350px;
  }
`;

const EditLink = styled(Link)`
  width: 49%;
  height: 100%;
  color: #fff;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));

  :hover {
    transform: scale(0.98);
  }
`;

const DeleteLink = styled(Link)`
  width: 49%;
  height: 100%;
  color: #fff;
  font-size: 18px;
  display: flex;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(195deg, rgb(236, 64, 64), rgb(216, 27, 27));

  :hover {
    transform: scale(0.98);
  }
`;

export default function ProductCard({ product }) {
  const { title, price, img } = product;

  return (
    <CardWrraper>
      <img src={img} alt="" />
      <div className="title">{title}</div>
      <div className="price">{price}</div>
      <div className="actions">
        <EditLink to={"/update-product"}>Edit</EditLink>
        <DeleteLink>Delete</DeleteLink>
      </div>
    </CardWrraper>
  );
}
