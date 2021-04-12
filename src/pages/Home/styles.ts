import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
  -webkit-box-shadow: -1px 20px 30px -3px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: -1px 20px 30px -3px rgba(0, 0, 0, 0.61);
  box-shadow: -1px 20px 30px -3px rgba(0, 0, 0, 0.61);

  .table-head {
    background-color: #ded6d6;
    tr th {
      text-align: center;
    }
  }

  .table-body {
    tr td {
      text-align: center;
    }
  }

  .table {
    width: 90%;
    margin: 0 auto;
    -webkit-box-shadow: -1px 20px 30px -3px rgba(0, 0, 0, 0.61);
    -moz-box-shadow: -1px 20px 30px -3px rgba(0, 0, 0, 0.61);
    box-shadow: -1px 20px 30px -3px rgba(0, 0, 0, 0.61);
  }

  .MuiTableContainer-root {
    overflow-x: visible;
  }

  .actions {
    display: flex;
    justify-content: space-around;
  }
`;

export const TitleList = styled.h1`
  color: #ada0a6;
  text-align: center;
  padding: 30px 0;
  font-weight: 300;
  text-transform: uppercase;
`;

export const ContainerHead = styled.div`
  width: 90%;
  margin: 0 auto 28px;
  button {
    margin-left: auto;
  }
`;
