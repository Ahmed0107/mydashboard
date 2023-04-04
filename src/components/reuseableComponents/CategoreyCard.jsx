import React from "react";
import styled from "styled-components";

const CardWrraper = styled.div`
  width: 15%;
  height: 190px;
  border-radius: 5px;
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }

  .title {
    padding: 0 10px;
    font-size: 24px;
  
}


  @media (min-width: 300px) and (max-width: 700px) {
    width: 250px;
    /* height: 300px; */
  }
  /* Tablet */
  @media (min-width: 700px) and (max-width: 1200px) {
    width: 250px;
    /* height: 350px; */
  }
`;



export default function CategoreyCard({ categorey }) {
  const { title, img } = categorey;

  return (
    <CardWrraper>
      <img src={img} alt="" />
      <div className="title">{title}</div>
    </CardWrraper>
  );
}
