/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

import { isValidEmail } from "@brazilian-utils/brazilian-utils";

import { Container, ContainerImage, ContainerForm, FooterForm } from "./styles";
import Unibode from "../../assets/img/unibode_pink.png";
import { fetchOneUser, putUser } from "../../api/user/rest-user";
import { useHistory, useLocation } from "react-router";

interface IForm {
  email: string;
  password: string;
  passwordConfirm: string;
  admin: boolean;
}

function EditUser() {
  const [helperTexts, setHelperTexts] = useState({
    password: "",
    email: "",
  });
  const [form, setForm] = useState<IForm>({
    email: "",
    password: "",
    passwordConfirm: "",
    admin: false,
  });

  const id = new URLSearchParams(useLocation().search).get("id");

  const history = useHistory();

  const handleChangeForm = (
    value: string,
    name: "email" | "password" | "passwordConfirm"
  ) => {
    setForm({ ...form, [name]: value });
  };

  const fetchUser = async () => {
    try {
      const { data } = await fetchOneUser(id || "");
      data[0].password = "";
      setForm(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.checked });
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

      await putUser(id || "", {
        email: form.email,
        password: form.password,
        admin: form.admin,
      });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Container>
      <ContainerImage>
        <img src={Unibode} alt="unibode" />
        <h2>Editar usuário</h2>
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
        <FormControlLabel
          label="É Administrador?"
          control={
            <Checkbox
              checked={form.admin}
              onChange={handleChange}
              name="admin"
              color="primary"
            />
          }
          labelPlacement="start"
        />
        <FooterForm>
          <div className="buttons">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              REGISTRAR
            </Button>
          </div>
        </FooterForm>
      </ContainerForm>
    </Container>
  );
}

export default EditUser;
