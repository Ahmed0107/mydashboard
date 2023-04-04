import React from "react";
import { Wrraper } from "../layout/Wrraper";
import demoImg from "./demoImg.jpg";
import ProductCard from "../components/reuseableComponents/ProductCard";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ProductList = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
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

const ProductsNav = styled.nav`
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

const AddProdLink = styled(Link)`
  height: 40px;
  background: linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71));
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

const products = [
  {
    title: "dkghiergj",
    price: 450,
    img: demoImg,
  },
  {
    title: "dkghiergj",
    price: 450,
    img: demoImg,
  },
  {
    title: "dkghiergj",
    price: 450,
    img: demoImg,
  },
  {
    title: "dkghiergj",
    price: 450,
    img: demoImg,
  },
  {
    title: "dkghiergj",
    price: 450,
    img: demoImg,
  },
  {
    title: "dkghiergj",
    price: 450,
    img: demoImg,
  },
  {
    title: "dkghiergj",
    price: 450,
    img: demoImg,
  },
  {
    title: "dkghiergj",
    price: 450,
    img: demoImg,
  },
  {
    title: "dkghiergj",
    price: 450,
    img: demoImg,
  },
  {
    title: "dkghiergj",
    price: 450,
    img: demoImg,
  },
  {
    title: "dkghiergj",
    price: 450,
    img: demoImg,
  },
  {
    title: "dkghiergj",
    price: 450,
    img: demoImg,
  },
  {
    title: "dkghiergj",
    price: 450,
    img: demoImg,
  },
  {
    title: "dkghiergj",
    price: 450,
    img: demoImg,
  },
  {
    title: "dkghiergj",
    price: 450,
    img: demoImg,
  },
];

export default function Prodcuts({ activeLink, setActiveLink }) {

  useEffect(() => {
    setActiveLink("Prodcuts");
  });

  return (
    <Wrraper>
      <ProductsNav>
        <h3>Products</h3>
        <input type="text" placeholder="Serach Products" />
        <div className="products-count">No. of Products: {products.length}</div>
        <AddProdLink to={"/add-product"}>Add Product</AddProdLink>
      </ProductsNav>
      <ProductList>
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </ProductList>
    </Wrraper>
  );
}
