import styled from "styled-components";

export const Container = styled.div`
  height: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const TitleList = styled.h1`
  color: #ada0a6;
  text-align: center;
  padding: 30px 0;
  font-weight: 300;
  text-transform: uppercase;
`;

export const ImageHeader = styled.img`
  margin-top: 5%;
  height: 60%;
`;

export const Logout = styled.div`
  position: absolute;
  top: 12px;
  right: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
  svg {
    margin-right: 6px;
  }
  color: #3f51b5;
`;
