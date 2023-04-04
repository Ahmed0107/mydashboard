import React from "react";
import styled from "styled-components";

const TableWrraper = styled.div`
  min-width: 100%;
  height: 100%;
  font-size: 18px;
  margin-top: 30px;
  overflow: auto;
`;

const DataTabel = styled.div`
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: table;
`;

const TabelRow = styled.div`
  display: table-row;
  background: #f6f6f6;

  :nth-of-type(odd) {
    background: #e9e9e9;
  }
`;
const TabelCell = styled.div`
  width: fit-content;
  text-align:start;
  height: 50px;
  padding: 10px;
  display: table-cell;
`;


export default function OrdersProdsTabel({ orderedProducts , totalAmount}) {
  return (
    <TableWrraper>
      <DataTabel>
        <TabelRow>
          <TabelCell style={{ fontSize: "20px" }}>id</TabelCell>
          <TabelCell style={{ fontSize: "20px" }}>Product Title</TabelCell>
          <TabelCell style={{ fontSize: "20px" }}>Product Price</TabelCell>
          <TabelCell style={{ fontSize: "20px" }}>Quantity</TabelCell>
          <TabelCell style={{ fontSize: "20px" }}>Total</TabelCell>
          <TabelCell style={{ fontSize: "20px" }}>Payment State</TabelCell>
        </TabelRow>

        {orderedProducts.map((product, idx) => (
          <TabelRow key={idx}>
            <TabelCell>{idx + 1}</TabelCell>
            <TabelCell>{product?.title}</TabelCell>
            <TabelCell>{product?.price}</TabelCell>
            <TabelCell>{product?.quantity}</TabelCell>
            <TabelCell>{product?.total}</TabelCell>
            <TabelCell>{product?.paymentState}</TabelCell>
          </TabelRow>
        ))}
      </DataTabel>
    </TableWrraper>
  );
}
