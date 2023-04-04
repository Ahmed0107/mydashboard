import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Dashboard from "../../pages/Dashbard";
import HomepageControl from "../../pages/HomepageControl";
import Orders from "../../pages/Orders";
import Prodcuts from "../../pages/Prodcuts";
import Navbar from "../LayoutComponents/Navbar";
import OrderDetails from "../Orders/OrderDetails";
import AddProductForm from "../Forms/AddProductForm";
import SlideShowForm from "../Forms/SlideShowForm";
import FeaturedProdsForm from "../Forms/FeaturedProdsForm";
import WeekendDiscountForm from "../Forms/WeekendDiscountForm";
import UpdateProdForm from "../Forms/UpdateProdForm";
import Categories from "../../pages/Categories";
import CategoriesForm from "../Forms/CategoriesForm";

const ContentWrraper = styled.main`
  width: calc(100vw - 250px);
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export default function AdminContent({
  showSideBar,
  setShowSideBar,
  activeLink,
  setActiveLink,
}) {

  return (
    <ContentWrraper>
      <Navbar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard activeLink={activeLink} setActiveLink={setActiveLink} />
          }
        />
        <Route
          path="/products"
          element={
            <Prodcuts activeLink={activeLink} setActiveLink={setActiveLink} />
          }
        />
        <Route
          path="/categories"
          element={
            <Categories activeLink={activeLink} setActiveLink={setActiveLink} />
          }
        />

        <Route path="/add-categorey" element={<CategoriesForm />} />

        <Route
          path="/orders"
          element={
            <Orders activeLink={activeLink} setActiveLink={setActiveLink} />
          }
        />
        <Route
          path="/home-page-control"
          element={
            <HomepageControl
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
          }
        />
        <Route path="/add-product" element={<AddProductForm />} />
        <Route path="/update-product" element={<UpdateProdForm />} />
        <Route path="/order-detailes" element={<OrderDetails />} />

        <Route path="/add-slide-show-image" element={<SlideShowForm />} />
        <Route path="/add-weekend-discount" element={<WeekendDiscountForm />} />
        <Route path="/add-featured-product" element={<FeaturedProdsForm />} />
      </Routes>
    </ContentWrraper>
  );
};

