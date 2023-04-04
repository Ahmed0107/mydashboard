import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TableWrraper = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100%;
  font-size: 18px;
  padding: 20px;
  margin-top: 30px;
  overflow: auto;
`;

const DataTabel = styled.div`
  margin: 0 0 40px 0;
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
  width: 20%;
  height: 50px;
  padding: 6px 12px;
  display: table-cell;
`;

const DeleteBtn = styled.button`
  width: 50%;
  height: 100%;
  color: #fff;
  font-size: 18px;
  display: flex;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(195deg, rgb(236, 64, 64), rgb(216, 27, 27));

  :hover {
    transform: scale(0.97);
  }
`;

const DetailseBtn = styled(Link)`
  width: 80%;
  height: 100%;
  color: #fff;
  font-size: 18px;
  display: flex;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));

  :hover {
    transform: scale(0.97);
  }
`;

export default function Tabel({ users }) {

  return (
    <TableWrraper>
      <DataTabel>
        <TabelRow>
          <TabelCell style={{ fontSize: "20px" }}>User</TabelCell>
          <TabelCell style={{ fontSize: "20px" }}>Email</TabelCell>
          <TabelCell style={{ fontSize: "20px" }}>Orders</TabelCell>
          <TabelCell style={{ fontSize: "20px" }}>Payment State</TabelCell>
          <TabelCell style={{ fontSize: "20px" }}>Actions</TabelCell>
        </TabelRow>

        {users.map((user, idx) => (
          <TabelRow key={idx}>
            <TabelCell>{user.username}</TabelCell>
            <TabelCell>{user.email}</TabelCell>
            <TabelCell>
              <DetailseBtn to={"/order-detailes"}>Order Detailes</DetailseBtn>
            </TabelCell>
            <TabelCell>{user.paymentState}</TabelCell>
            <TabelCell>
              <DeleteBtn>Delete</DeleteBtn>
            </TabelCell>
          </TabelRow>
        ))}
      </DataTabel>
    </TableWrraper>
  );
}
