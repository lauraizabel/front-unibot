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
`;

export const ContainerImage = styled.div`
  padding-top: 24px;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  img {
    width: 100%;
    height: 60%;
    object-fit: contain;
  }
  h2 {
    text-align: center;
    color: #ada0a6;
  }
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

    a {
      margin-top: 24px;
      text-align: center;
    }
  }
`;
