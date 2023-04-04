import styled from "styled-components";

export const Wrraper = styled.main`
  width: 95%;
  min-height: calc(100vh - 100px);
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

    /* mobile */
  @media (min-width: 300px) and (max-width: 700px) {
    height: fit-content;
  }
  /* Tablet */
  @media (min-width: 700px) and (max-width: 1000px) {
    
  }

`;
