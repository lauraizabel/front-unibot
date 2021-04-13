import React, { useEffect, useState } from "react";

import { Container, TitleList, ContainerHead } from "./styles";

import { Link, useHistory } from "react-router-dom";

import {
  fetchQA,
  deleteQA,
} from "../../api/questions-and-answers/rest-questions-and-answers";

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
import ConfirmDelete from "../../components/ConfirmDelete";

interface IQA {
  topic?: string;
  q: string[];
  a: string[];
  _id: string;
}

function Home() {
  const [open, setOpen] = useState(false);
  const [qa, setQa] = useState<IQA[]>();
  const [id, setId] = useState<string>("");

  const history = useHistory();

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

  const onConfirmDelete = async (id: string) => {
    await deleteQA(id);
    setOpen(false);
  };

  return (
    <Container>
      <ContainerHead>
        <TitleList>Perguntas e Respostas</TitleList>
        <Link to="/register">
          <ButtonAdd />
        </Link>
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
                  <DeleteButton
                    onClick={() => {
                      setOpen(true);
                      setId(questionAndAnswer._id);
                    }}
                  />
                  <EditButton
                    onClick={() =>
                      history.push(`/edit?id=${questionAndAnswer._id}`)
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ConfirmDelete
        open={open}
        id={id}
        onAgree={() => onConfirmDelete(id)}
        onDisagree={() => setOpen(false)}
        handleClose={() => setOpen(false)}
      />
    </Container>
  );
}

export default Home;
