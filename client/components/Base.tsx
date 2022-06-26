import styled from "styled-components";

export const Stepper = styled.div`
  background: #f2c43e;
  color: black;
  font-size: 16px;
  padding: 5px 10px;
  display: inline-flex;
  margin: 0 5px;
  position: relative;

  box-shadow: rgb(0, 0, 0) -5px 5px 0px -1px, #f2c43e -5px 5px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin: 20px 0px;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 10px 15px;
  background: #fff;
  color: black;
  :hover {
    background-color: #d3d3d3;
  }
`;
