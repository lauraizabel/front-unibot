import React, { useState } from "react";

import { TextField } from "@material-ui/core";
import { FaPlus } from "react-icons/fa";

import { useHistory } from "react-router-dom";

import { postQA } from "../../api/questions-and-answers/rest-questions-and-answers";

import {
  Container,
  TitleList,
  Form,
  ContainerForm,
  InputGroup,
  ButtonAdd,
  SubTitle,
} from "./styles";

import ButtonsFooter from "../../components/ButtonsFooter";

function Register() {
  const [form, setForm] = useState({
    listQuestions: [""],
    topic: "",
    listAnswers: [""],
  });

  const history = useHistory();

  const handleChangeTopic = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = event.target;
    setForm({ ...form, topic: value });
  };

  const handleAddQA = (type: string) =>
    type === "q"
      ? setForm((oldList) => ({
          ...oldList,
          listQuestions: [...oldList.listQuestions, ""],
        }))
      : setForm((oldList) => ({
          ...oldList,
          listAnswers: [...oldList.listAnswers, ""],
        }));

  const handleChangeQA = (type: string, value: string, index: number) => {
    const isAnswers = type === "a";
    const values = isAnswers ? [...form.listAnswers] : [...form.listQuestions];
    values[index] = value;
    isAnswers
      ? setForm({ ...form, listAnswers: values })
      : setForm({ ...form, listQuestions: values });
  };

  const cancel = () => history.push("/");

  const handleSubmit = async (event: React.FormEvent<HTMLDivElement>) => {
    try {
      event.preventDefault();
      const formattedQuestions = form.listQuestions.map((question) => {
        const index = question.indexOf("?");

        if (index > -1) return question.slice(0, index);

        return question;
      });
      const formattedData = {
        topic: form.topic,
        questions: formattedQuestions,
        answer: form.listAnswers,
      };

      await postQA(formattedData);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <TitleList>Registrar Perguntas e respostas</TitleList>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <div className="container-topic">
          <TextField
            name="topic"
            label="Tópico da pergunta"
            required
            onChange={(e) => handleChangeTopic(e)}
          />
        </div>
        <ContainerForm>
          <SubTitle> Se o usuário falar sobre:</SubTitle>
          <div>
            {form.listQuestions.map((q, index) => (
              <InputGroup>
                <TextField
                  id="standard-basic"
                  label="Se o usuário falar sobre..."
                  value={q}
                  required
                  name="question"
                  onChange={(e) => handleChangeQA("q", e.target.value, index)}
                />
                <ButtonAdd>
                  <button onClick={() => handleAddQA("q")} type="button">
                    <FaPlus color={"#7D938A"} />
                  </button>
                </ButtonAdd>
              </InputGroup>
            ))}
          </div>
          <div>
            <SubTitle> A resposta será:</SubTitle>
            {form.listAnswers.map((a, index) => (
              <InputGroup>
                <TextField
                  id="standard-basic"
                  label="A resposta será..."
                  value={a}
                  required
                  name="answers"
                  onChange={(e) => handleChangeQA("a", e.target.value, index)}
                />
                <ButtonAdd>
                  <button onClick={() => handleAddQA("a")} type="button">
                    <FaPlus color={"#7D938A"} />
                  </button>
                </ButtonAdd>
              </InputGroup>
            ))}
          </div>
        </ContainerForm>
      </Form>
      <ButtonsFooter
        onClickCancel={cancel}
        onClickSave={(e: any) => handleSubmit(e)}
      />
    </Container>
  );
}

export default Register;
