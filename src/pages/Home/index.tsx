/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";

import { Container, ContainerHead, DivButtonField } from "./styles";

import { Link, useHistory } from "react-router-dom";
import Fuse from "fuse.js";

import {
  fetchQA,
  deleteQA,
} from "../../api/questions-and-answers/rest-questions-and-answers";

import DeleteButton from "../../components/DeleteButton";
import EditButton from "../../components/EditButton";
import ButtonAdd from "../../components/ButtonAdd";
import Header from "../../components/Header";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
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
  const [qa, setQa] = useState<IQA[]>([]);
  const [id, setId] = useState<string>("");
  const [search, setSearch] = useState("");

  const history = useHistory();

  const options = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    threshold: 0.2,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: ["topic"],
  };

  const fuse = new Fuse(qa, options);

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
    fetch();
    setOpen(false);
  };

  const searchedQA = useMemo(() => {
    if (search.length !== 0) {
      const result = fuse.search(search);
      const formattedResult = result.map((e) => e.item);
      return formattedResult;
    }
    return qa;
  }, [search, qa]);
  console.log(search);
  return (
    <Container>
      <ContainerHead>
        <Header title="Perguntas e Respostas" />
        <DivButtonField>
          <TextField
            label="Pesquise por tópicos"
            margin="normal"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link to="/register">
            <ButtonAdd />
          </Link>
        </DivButtonField>
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
            {searchedQA?.map((questionAndAnswer) => (
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
