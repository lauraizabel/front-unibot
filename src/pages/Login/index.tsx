import React from "react";

import { TextField, Button } from "@material-ui/core";

import {
  Container,
  ContainerLogin,
  ContainerImage,
  ContainerForm,
  FooterForm,
} from "./styles";
import Unibode from "../../assets/img/unibode_pink.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container>
      <ContainerLogin>
        <ContainerImage>
          <img src={Unibode} alt="" />
        </ContainerImage>
        <ContainerForm>
          <TextField id="outlined-basic" label="E-mail" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            type="password"
          />
          <FooterForm>
            <Link to="#">Esqueci minha senha</Link>
            <div className="buttons">
              <Button variant="contained" color="primary">
                Entrar
              </Button>
              <Link to="#">Cadastrar</Link>
            </div>
          </FooterForm>
        </ContainerForm>
      </ContainerLogin>
    </Container>
  );
}

export default Login;
