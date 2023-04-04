import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdAddchart, MdDashboard, MdShoppingBag, MdHome, MdShoppingBasket } from "react-icons/md";

const SidebarWrraper = styled.aside`
  width: 250px;
  height: 95vh;
  background: linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));
  border-radius: 12px;
  margin-left: 10px;
  padding: 16px;
  transition: all 1 ease;

  .btn-close-sidebar {
    display: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
    background: linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96));
    border: none;
    color: #fff;

    :hover {
      transform: scale(0.98);
    }
  }

  @media screen and (max-width: 1000px) {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1900;

    .btn-close-sidebar {
      display: block;
    }
  }
`;

const SideLink = styled(Link)`
  font-size: 14px;
  padding: 14px 10px;
  margin: 8px;
  color: #fff;
  display: flex;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background-color: gray;
  }
`;

const DashboardLogo = styled.div`
  width: 100%;
  height: 50px;
  font-size: 20px;
  color: #ffff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Sidebar({ setShowSideBar, activeLink, setActiveLink }) {

  const navigations = [
    {
      icon: <MdDashboard fontSize={20} />,
      title: "Dashboard",
      distination: "/",
    },
    {
      icon: <MdShoppingBag fontSize={20} />,
      title: "Prodcuts",
      distination: "/products",
    },
    {
      icon: <MdShoppingBasket fontSize={20} />,
      title: "Categories",
      distination: "/categories",
    },
    {
      icon: <MdAddchart fontSize={20} />,
      title: "Orders",
      distination: "/orders",
    },
    {
      icon: <MdHome fontSize={20} />,
      title: "Homepage Control",
      distination: "/home-page-control",
    },
  ];

  return (
    <SidebarWrraper>
      <DashboardLogo>
        Store Dashboard{" "}
        <button
          className="btn-close-sidebar"
          onClick={() => setShowSideBar(false)}
        >
          Close
        </button>
      </DashboardLogo>

      {navigations.map((link, idx) => (
        <SideLink
          key={idx}
          to={link.distination}
          style={{
            backgroundColor: link.title === activeLink && "#5E72E4",
            opacity: link.title === activeLink && "1",
            color: link.title === activeLink && "#fff",
          }}
          onClick={() => setActiveLink(link.title)}
        >
          <span>{link.icon}</span>{" "}
          <span style={{ marginLeft: "16px" }}>{link.title}</span>
        </SideLink>
      ))}
    </SidebarWrraper>
  );
}
