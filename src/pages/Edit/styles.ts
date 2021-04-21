import styled from "styled-components";

export const Container = styled.form`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
  -webkit-box-shadow: -1px 20px 30px -3px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: -1px 20px 30px -3px rgba(0, 0, 0, 0.61);
  box-shadow: -1px 20px 30px -3px rgba(0, 0, 0, 0.61);
  overflow: auto;
  padding-bottom: 12px;
`;

export const TitleList = styled.h2`
  color: #ada0a6;
  text-align: center;
  padding: 30px 0;
  font-weight: 300;
  text-transform: uppercase;
`;

export const Form = styled.div`
  width: 80%;
  margin: 20px auto;
  border: 1.4px solid #c9c9c9;
  border-radius: 9px;
  padding: 16px;
  height: 65%;
  max-height: 65%;
  overflow: auto;
  .container-topic {
    width: 90%;
    margin: 0 auto;
  }
`;

export const ContainerForm = styled.div`
  margin-top: 24px;
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-around;
  .MuiFormControl-root {
    margin: 8px 0;
    width: 75%;
  }
`;

export const ButtonAdd = styled.div`
  button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9e7e7;
    border: 1px solid #d2cbcb;
    padding: 8px;
    outline: none;
    border-radius: 9px;
    &:hover {
      background-color: #eddddd;
      transition: 0.3s;
    }
  }
  display: flex;
  justify-content: center;
  align-items: end;
  margin-top: auto;
`;

export const SubTitle = styled.h4`
  width: 90%;
  margin: 16px auto 0px;
  color: #7d938a;
`;

export const ContainerHeader = styled.div`
  height: 20%;
`;
