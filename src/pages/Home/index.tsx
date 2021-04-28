/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";

import { Container, ContainerHead } from "./styles";

import Fuse from "fuse.js";

import {
  fetchQA,
  deleteQA,
} from "../../api/questions-and-answers/rest-questions-and-answers";

import Header from "../../components/Header";

import { Tabs, Tab } from "@material-ui/core";
import Table from "./components/Table";
import ConfirmDelete from "../../components/ConfirmDelete";
import TabPanel from "./components/TabPanel";

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
  const [value, setValue] = React.useState(0);

  const options = {
    threshold: 0.2,

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

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const searchedQA = useMemo(() => {
    if (search.length !== 0) {
      const result = fuse.search(search);
      const formattedResult = result.map((e) => e.item);
      return formattedResult;
    }
    return qa;
  }, [search, qa]);

  return (
    <Container>
      <ContainerHead>
        <Header />
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Perguntas e Respostas" />
          <Tab label="Usuários" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Table
            setId={setId}
            setOpen={setOpen}
            searchedQA={searchedQA}
            tableKeys={tableKeys}
            setSearch={setSearch}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </ContainerHead>

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
