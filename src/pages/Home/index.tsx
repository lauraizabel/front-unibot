/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";

import { Container, ContainerHead } from "./styles";

import Fuse from "fuse.js";

import {
  fetchQA,
  deleteQA,
} from "../../api/questions-and-answers/rest-questions-and-answers";

import { deleteUser, fetchOneUser, fetchUsers } from "../../api/user/rest-user";

import Header from "../../components/Header";

import { Tabs, Tab } from "@material-ui/core";
import Table from "./components/Table";
import ConfirmDelete from "../../components/ConfirmDelete";
import TabPanel from "./components/TabPanel";
import TableUsers from "./components/TableUsers";
import { getUserId } from "../../services/localStorage";

interface IQA {
  topic?: string;
  q: string[];
  a: string[];
  _id: string;
}

interface IUsers {
  admin: boolean;
  email: string;
  password: string;
  _id: string;
}

function Home() {
  const [open, setOpen] = useState(false);
  const [qa, setQa] = useState<IQA[]>([]);
  const [id, setId] = useState<string>("");
  const [search, setSearch] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [value, setValue] = useState(0);
  const [users, setUsers] = useState<IUsers[]>([]);
  const [user, setUser] = useState<IUsers>();

  const options = {
    threshold: 0.2,
    keys: ["topic", "email"],
  };

  const fuse = new Fuse(qa, options);
  const fuseEmail = new Fuse(users, options);
  const tableKeys = [
    "ID",
    "TÓPICOS",
    "QTD. PERGUNTAS",
    "QTD. RESPOSTAS",
    "AÇÕES",
  ];

  const tableKeysUser = user?.admin
    ? ["ID", "E-mail", "Admin", "Ações"]
    : ["ID", "E-mail", "Admin"];

  const fetch = async () => {
    try {
      const { data } = await fetchQA();
      setQa(data);
      const { data: users } = await fetchUsers();
      setUsers(users);

      const { data: user } = await fetchOneUser(getUserId() ?? "");
      setUser(user[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const onConfirmDelete = async (id: string) => {
    value === 0 ? await deleteQA(id) : await deleteUser(id);
    setOpen(false);
    fetch();
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

  const searchedUsers = useMemo(() => {
    if (searchEmail.length !== 0) {
      const result = fuseEmail.search(searchEmail);
      const formattedResult = result.map((e) => e.item);
      return formattedResult;
    }
    return users;
  }, [searchEmail, users]);

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
          <TableUsers
            tableKeys={tableKeysUser}
            setId={setId}
            setOpen={setOpen}
            dataUsers={searchedUsers}
            setSearch={setSearchEmail}
            isAdmin={user?.admin}
          />
        </TabPanel>
      </ContainerHead>

      <ConfirmDelete
        open={open}
        id={id}
        onAgree={() => onConfirmDelete(id)}
        onDisagree={() => setOpen(false)}
        handleClose={() => setOpen(false)}
        text={`Tem certeza de que deseja excluir este ${
          value === 0 ? "tópico" : "usuário"
        }?`}
      />
    </Container>
  );
}

export default Home;
