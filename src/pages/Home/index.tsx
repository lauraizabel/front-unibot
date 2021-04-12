import React, { useEffect, useState } from "react";

import { Container, TitleList, ContainerHead } from "./styles";

import { fetchQA } from "../../api/questions-and-answers/rest-questions-and-answers";

import DeleteButton from "../../components/DeleteButton";
import EditButton from "../../components/EditButton";
import ButtonAdd from "../../components/ButtonAdd";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

interface IQA {
  topic?: string;
  q: string[];
  a: string[];
  _id: string;
}

function Home() {
  const [qa, setQa] = useState<IQA[]>();

  const tableKeys = [
    "ID",
    "TÓPICOS",
    "QTD. PERGUNTAS",
    "QTD. RESPOSTAS",
    "AÇÕES",
  ];

  const fetch = async () => {
    try {
      const { data } = await fetchQA();
      setQa(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Container>
      <ContainerHead>
        <TitleList>Perguntas e Respostas</TitleList>
        <ButtonAdd />
      </ContainerHead>
      <TableContainer>
        <Table className="table">
          <TableHead className="table-head">
            <TableRow>
              {tableKeys.map((key) => (
                <TableCell>{key}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className="table-body">
            {qa?.map((questionAndAnswer) => (
              <TableRow>
                <TableCell>{questionAndAnswer?._id.substr(18)}</TableCell>
                <TableCell>
                  {questionAndAnswer?.topic ?? "Tópico não encontrado."}
                </TableCell>
                <TableCell>{questionAndAnswer?.q.length}</TableCell>
                <TableCell>{questionAndAnswer?.a.length}</TableCell>
                <TableCell className="actions">
                  <DeleteButton />
                  <EditButton />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Home;
