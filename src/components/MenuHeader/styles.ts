import styled from "styled-components";

export const BackContainer = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Container = styled.div`
  width: 97%;
  height: 10vh;
  border-radius: 0 0 16px 16px;
  box-shadow: 0px 8px 8px 0px #0004;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;

  img {
    padding-left: 8px;
  }
  div {
    padding-right: 32px;
  }
`;
