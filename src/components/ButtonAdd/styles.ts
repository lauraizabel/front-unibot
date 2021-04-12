import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9e7e7;
  border: 1px solid #d2cbcb;
  padding: 12px;
  border-radius: 9px;
  outline: none;
  text-transform: uppercase;
  color: #7d938a;
  font-weight: 700;

  &:hover {
    background-color: #eddddd;
    transition: 0.3s;
  }
`;
