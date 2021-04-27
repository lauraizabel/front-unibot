import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { isValidEmail } from "@brazilian-utils/brazilian-utils";

import {
  Container,
  ContainerRegister,
  ContainerImage,
  ContainerForm,
  FooterForm,
} from "./styles";
import Unibode from "../../assets/img/unibode_pink.png";
import { postUser } from "../../api/user/rest-user";

interface IForm {
  email: string;
  password: string;
  passwordConfirm: string;
}

function RegisterUser() {
  const [helperTexts, setHelperTexts] = useState({
    password: "",
    email: "",
  });
  const [form, setForm] = useState<IForm>({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChangeForm = (
    value: string,
    name: "email" | "password" | "passwordConfirm"
  ) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      if (form.passwordConfirm.length === 0 || form.password.length === 0) {
        setHelperTexts({ ...helperTexts, password: "Insira uma senha." });
        return;
      }

      if (form.password !== form.passwordConfirm) {
        setHelperTexts({ ...helperTexts, password: "Senhas não conferem." });
        return;
      }

      if (!isValidEmail(form.email)) {
        setHelperTexts({ ...helperTexts, email: "E-mail inválido." });
        return;
      }

      setHelperTexts({ password: "", email: "" });

      await postUser({
        email: form.email,
        password: form.password,
        admin: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <ContainerRegister>
        <ContainerImage>
          <img src={Unibode} alt="unibode" />
        </ContainerImage>
        <ContainerForm>
          <TextField
            error={helperTexts.email.length > 0}
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            value={form.email}
            name="email"
            onChange={(event) =>
              handleChangeForm(event.target.value, event.target.name as any)
            }
            helperText={helperTexts.email}
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            type="password"
            value={form.password}
            name="password"
            onChange={(event) =>
              handleChangeForm(event.target.value, event.target.name as any)
            }
          />
          <TextField
            error={helperTexts.password.length > 0}
            id="outlined-basic"
            label="Confirmar senha"
            variant="outlined"
            type="password"
            value={form.passwordConfirm}
            name="passwordConfirm"
            onChange={(event) =>
              handleChangeForm(event.target.value, event.target.name as any)
            }
            helperText={helperTexts.password}
          />
          <FooterForm>
            <div className="buttons">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                REGISTRAR
              </Button>
            </div>
          </FooterForm>
        </ContainerForm>
      </ContainerRegister>
    </Container>
  );
}

export default RegisterUser;
