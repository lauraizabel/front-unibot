import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerLogin = styled.div`
  width: 60%;
  height: 60%;
  background-color: #fff;
  border-radius: 9px;
  -webkit-box-shadow: -1px 20px 30px -3px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: -1px 20px 30px -3px rgba(0, 0, 0, 0.61);
  box-shadow: -1px 20px 30px -3px rgba(0, 0, 0, 0.61);
  img {
    width: 20%;
    display: flex;
    object-fit: contain;
  }
`;

export const ContainerImage = styled.div`
  padding-top: 24px;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
`;

export const ContainerForm = styled.form`
  width: 90%;
  margin: 48px auto 12px;
  .MuiFormControl-root {
    width: 100%;
    margin-bottom: 32px;
  }
`;

export const FooterForm = styled.div`
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 16px;
    text-decoration: none;
    color: #3f51b5;
    text-transform: uppercase;
  }

  .buttons {
    width: 70%;
    margin: 12px auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    button {
      width: 80%;
    }
    a {
      margin-top: 24px;
    }
  }
`;
