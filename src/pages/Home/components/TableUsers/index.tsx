import React from "react";
import { useHistory } from "react-router-dom";

import {
  TableHead,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TextField,
} from "@material-ui/core";
import { Container } from "./styles";

import DeleteButton from "../../../../components/DeleteButton";
import EditButton from "../../../../components/EditButton";
import ButtonToggle from "../../../../components/ButtonToggle";
import { DivButtonField } from "../Table/styles";

interface IUsers {
  admin: boolean;
  email: string;
  password: string;
  _id: string;
}

interface TableUsersProps {
  dataUsers: IUsers[];
  tableKeys: string[];
  setId: (value: React.SetStateAction<string>) => void;
  setOpen: (value: React.SetStateAction<boolean>) => void;
  setSearch: (value: React.SetStateAction<string>) => void;
  isAdmin: boolean | undefined;
}

function TableUsers({
  tableKeys,
  dataUsers,
  setId,
  setOpen,
  setSearch,
  isAdmin = false,
}: TableUsersProps) {
  const history = useHistory();

  return (
    <Container>
      <DivButtonField>
        <TextField
          label="Pesquise e-mail"
          margin="normal"
          onChange={(e) => setSearch(e.target.value)}
        />
        {isAdmin && <ButtonToggle link={"/register_user"} />}
      </DivButtonField>
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
            {dataUsers?.map((user) => (
              <TableRow>
                <TableCell>{user?._id.substr(18)}</TableCell>
                <TableCell>{user?.email ?? "E-mail não encontrado."}</TableCell>
                <TableCell>{user?.admin ? "SIM" : "NÃO"}</TableCell>
                {isAdmin && (
                  <TableCell className="actions">
                    <DeleteButton
                      onClick={() => {
                        setOpen(true);
                        setId(user._id);
                      }}
                    />
                    <EditButton
                      onClick={() => history.push(`/edit_user?id=${user._id}`)}
                    />
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default TableUsers;
