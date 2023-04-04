import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Wrraper } from "../layout/Wrraper";

const HomePageControlWrraper = styled.div`
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 30px;
`;

const HomePageCard = styled.div`
  width: 48%;
  height: 250px;
  min-height: 200px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 300px) and (max-width: 700px) {
    width: 90%;
  }
  /* Tablet */
  @media (min-width: 700px) and (max-width: 1100px) {
    width: 80%;
  }
`;

const AddThingButton = styled(Link)`
  width: 65%;
  height: 40px;
  border-radius: 5px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;

  :hover {
    transform: scale(0.98);
  }

  @media (min-width: 300px) and (max-width: 700px) {
    width: 90%;
  }
`;

export default function HomepageControl({ activeLink, setActiveLink }) {
 
  
    useEffect(() => {
      setActiveLink("Homepage Control");
    });

  return (
    <Wrraper>
      <HomePageControlWrraper>
        <HomePageCard>
          <h2>Homepage Slide Show</h2>
          <h4>
            Add slide to homepagsslore lo e to the breaking offers and new
            product and categories
          </h4>
          <AddThingButton
            to={"/add-slide-show-image"}
            style={{
              background:
                "linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
            }}
          >
            Add Slide Show Image
          </AddThingButton>
        </HomePageCard>

        <HomePageCard>
          <h2>Weekend Discount</h2>
          <h4>Add a weekend discount to homepage to the breaking offers</h4>
          <AddThingButton
            to={"/add-weekend-discount"}
            style={{
              background:
                "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
            }}
          >
            Add Weekend Discount
          </AddThingButton>
        </HomePageCard>

        <HomePageCard>
          <h2>Featured Products</h2>
          <h4>
            Add A featured Product to homepage to the breaking offers and new
            product and categories
          </h4>
          <AddThingButton
            to={"/add-featured-product"}
            style={{
              background:
                "linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))",
            }}
          >
            Add Featured Product
          </AddThingButton>
        </HomePageCard>
      </HomePageControlWrraper>
    </Wrraper>
  );
}
