import React from 'react'
import styled from 'styled-components';
import { Wrraper } from '../../layout/Wrraper'

const FormWarrper = styled.form`
  width: 100%;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    width: 50%;
    font-size: 18px;
    padding-top: 5px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  input,
  select {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #c2c0c0;
    background-color: #fff;
    padding: 0 10px;
    font-size: 18px;
    :focus {
      outline: none;
      border: 2px solid #419bf0;
    }
  }

  button {
    width: 50%;
    height: 50px;
    margin-top: 20px;
    font-size: 20px;
    background: linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96));
    border-radius: 5px;
    border: none;
    color: #fff;
    cursor: pointer;
    :hover {
      transform: scale(0.98);
    }
  }

  /* Mobile */
  @media (min-width: 300px) and (max-width: 700px) {
    label,
    button {
      width: 90%;
    }
    h1 {
      font-size: 20px;
    }
  }
  /* Tablet */
  @media (min-width: 700px) and (max-width: 1000px) {
    label,
    button {
      width: 70%;
    }
  }
`;

export default function FeaturedProdsForm() {
  return (
    <Wrraper>
      <FormWarrper>
        <h1>Add a new Featured Product</h1>
        <label htmlFor="title">
          Product Title :
          <input type="text" id="title" name="title" placeholder="Title" />
        </label>

        <label htmlFor="category">
          Select a Category :
          <select type="text" id="category" name="category">
            <option value="none">none</option>
            <option value="none">Laptops</option>
            <option value="none">Smart Phones</option>
          </select>
        </label>

        <label htmlFor="brand">
          Brand :
          <input type="text" id="brand" name="brand" placeholder="Brand" />
        </label>

        <label htmlFor="images">
          Upload Images :
          <input
            type="file"
            id="images"
            name="images"
            style={{ padding: "10px" }}
            multiple
          />
        </label>

        <label htmlFor="oldPrice">
          Old Price :
          <input type="text" id="oldPrice" name="oldPrice" placeholder="12$" />
        </label>

        <label htmlFor="new Price">
          New Price :
          <input type="text" id="new Price" name="new Price" placeholder="8$" />
        </label>

        <button type="submit">Add Featured Product</button>
      </FormWarrper>
    </Wrraper>
  );
}
