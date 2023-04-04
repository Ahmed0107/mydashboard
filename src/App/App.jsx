import styled from "styled-components";

import Sidebar from "./../components/LayoutComponents/Sidebar";
import AdminContent from "./../components/LayoutComponents/AdminContent";
import { useEffect, useState } from "react";
import bg from "../Assets/app_background.png";

const AppContainer = styled.div`
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: #f0f2f5;
  background-repeat: no-repeat;
  background-position: top;
`;

export const App = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [activeLink, setActiveLink] = useState("Dashboard");

  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setDeviceWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    if (deviceWidth > 1000) {
      setShowSideBar(true);
    } else if (deviceWidth < 1000) {
      setShowSideBar(false);
    }
  }, [deviceWidth]);

  return (
    <AppContainer>
      {showSideBar && (
        <Sidebar
          setShowSideBar={setShowSideBar}
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
      )}
      <AdminContent
        ShowSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
    </AppContainer>
  );
};
