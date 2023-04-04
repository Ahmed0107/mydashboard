import React from "react";
import {
  MdHome,
  MdMenu,
  MdPersonPin,
  MdSettings,
} from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavWrraper = styled.nav`
  width: 95%;
  min-height: 60px;
  background-color: #ffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 20px;
  border-radius: 10px;
`;

const RightIcons = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & input {
    height: 40px;
    width: 70%;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 0 10px;
    font-size: 16px;

    :focus {
      outline: none;
    }
  }

  /* mobile */
  @media (min-width: 300px) and (max-width: 700px) {
    width: 70%;
  }
  /* Tablet */
  @media (min-width: 700px) and (max-width: 1000px) {
    width: 50%;
  }
`;

const MdHomeIcon = styled(MdHome)`
  font-size: 24px;
  cursor: pointer;
  color: rgb(123, 128, 154);
  width: 50px;
`;

const MdSettingsIcon = styled(MdSettings)`
  font-size: 24px;
  cursor: pointer;
  color: rgb(123, 128, 154);
  width: 50px;
`;

const PersonIcon = styled(MdPersonPin)`
  font-size: 24px;
  cursor: pointer;
  color: rgb(123, 128, 154);
  width: 50px;
`;

const MdMenuIcon = styled(MdMenu)`
  font-size: 24px;
  cursor: pointer;
  color: rgb(123, 128, 154);
  width: 50px;
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

export default function Navbar({ showSideBar, setShowSideBar }) {
  return (
    <NavWrraper>
      <Link to={"/"}>
        <MdHomeIcon />
      </Link>
      <RightIcons>
        <input type="text" placeholder="Type here..." />
        <PersonIcon />
        <MdSettingsIcon />
        <MdMenuIcon onClick={() => setShowSideBar(true)} />
      </RightIcons>
    </NavWrraper>
  );
}
