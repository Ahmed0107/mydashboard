import React from "react";
import { Wrraper } from "../layout/Wrraper";
import demoImg from "./demoImg.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CategoreyCard from "../components/reuseableComponents/CategoreyCard";
import { useEffect } from "react";

const CategoriesList = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow: auto;

  /* mobile */
  @media (min-width: 300px) and (max-width: 700px) {
    min-height: fit-content;
  }
  /* Tablet */
  @media (min-width: 700px) and (max-width: 1000px) {
    min-height: fit-content;
  }
`;

const CategoriesNav = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & input {
    width: 400px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 0 10px;
    font-size: 16px;

    :focus {
      outline: none;
    }
  }

  .products-count {
    font-size: 20px;
  }
  /* mobile */
  @media (min-width: 300px) and (max-width: 700px) {
    min-height: 150px;
    flex-direction: column;

    h3 {
      display: none;
    }

    input {
      width: 90%;
    }

    .products-count {
      font-size: 16px;
    }
  }
  /* Tablet */
  @media (min-width: 700px) and (max-width: 1000px) {
    h3 {
      display: none;
    }

    input {
      width: 300px;
    }
  }
`;

const AddCategoryLink = styled(Link)`
  height: 40px;
  background: linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));
  border-radius: 5px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;

  :hover {
    transform: scale(0.98);
  }
`;

const categories = [
  {
    title: "Laptops",
    img: demoImg,
  },
  {
    title: "Laptops",
    img: demoImg,
  },
  {
    title: "Laptops",
    img: demoImg,
  },
  {
    title: "Smart Phones",
    img: demoImg,
  },
  {
    title: "Headphones",
    img: demoImg,
  },
  {
    title: "Headphones",
    img: demoImg,
  },
  {
    title: "Headphones",
    img: demoImg,
  },
  {
    title: "Headphones",
    img: demoImg,
  },
  {
    title: "Headphones",
    img: demoImg,
  },
  {
    title: "Headphones",
    img: demoImg,
  },
  {
    title: "Headphones",
    img: demoImg,
  },
  {
    title: "Headphones",
    img: demoImg,
  },
  {
    title: "Headphones",
    img: demoImg,
  },
  {
    title: "Headphones",
    img: demoImg,
  },
];

export default function Categories({ activeLink, setActiveLink }) {

    useEffect(() => {
      setActiveLink("Categories");
    });

  return (
    <Wrraper>
      <CategoriesNav>
        <h3>Categories</h3>
        <input type="text" placeholder="Serach Categories" />
        <div className="products-count">
          No. of Categories: {categories.length}
        </div>
        <AddCategoryLink to={"/add-categorey"}>Add Category</AddCategoryLink>
      </CategoriesNav>
      <CategoriesList>
        {categories.map((categorey, idx) => (
          <CategoreyCard key={idx} categorey={categorey} />
        ))}
      </CategoriesList>
    </Wrraper>
  );
}

