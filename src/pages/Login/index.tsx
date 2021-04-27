import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

import {
  Container,
  ContainerLogin,
  ContainerImage,
  ContainerForm,
  FooterForm,
} from "./styles";
import Unibode from "../../assets/img/unibode_pink.png";
import { authUser } from "../../api/user/rest-user";
import { saveAuthData } from "../../services/auth";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const history = useHistory();
  const handleChangeForm = (value: string, name: "email" | "password") => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const { data } = await authUser(form);
      saveAuthData(data);
      history.push("/");
    } catch (error) {
      setError("Credenciais inválidas.");
      console.log(error);
    }
  };
  return (
    <Container>
      <ContainerLogin>
        <ContainerImage>
          <img src={Unibode} alt="" />
        </ContainerImage>
        <ContainerForm>
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            name="email"
            onChange={(event) =>
              handleChangeForm(event.target.value, event.target.name as any)
            }
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            type="password"
            name="password"
            onChange={(event) =>
              handleChangeForm(event.target.value, event.target.name as any)
            }
          />
          {error.length > 0 && <h5>{error}</h5>}
          <FooterForm>
            <div className="buttons">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Entrar
              </Button>
              <Link to="/register_user">Cadastrar</Link>
            </div>
          </FooterForm>
        </ContainerForm>
      </ContainerLogin>
    </Container>
  );
}

export default Login;
