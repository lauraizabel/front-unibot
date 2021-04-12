import styled from "styled-components";

export const Container = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9e7e7;
  border: 1px solid #d2cbcb;
  padding: 8px;
  border-radius: 50%;
  outline: none;

  &:hover {
    background-color: #eddddd;
    transition: 0.3s;
  }
`;
