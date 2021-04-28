import React from "react";
import {
  TableHead,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TextField,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";
import { Container, DivButtonField } from "./styles";
import DeleteButton from "../../../../components/DeleteButton";
import EditButton from "../../../../components/EditButton";
import ButtonToggle from "../../../../components/ButtonToggle";

interface IQA {
  topic?: string;
  q: string[];
  a: string[];
  _id: string;
}

interface TableProps {
  searchedQA: IQA[];
  tableKeys: string[];
  setId: (value: React.SetStateAction<string>) => void;
  setOpen: (value: React.SetStateAction<boolean>) => void;
  setSearch: (value: React.SetStateAction<string>) => void;
}

function TableComponent({
  searchedQA,
  tableKeys,
  setId,
  setOpen,
  setSearch,
}: TableProps) {
  const history = useHistory();
  return (
    <Container>
      <DivButtonField>
        <TextField
          label="Pesquise por tópicos"
          margin="normal"
          onChange={(e) => setSearch(e.target.value)}
        />
        <ButtonToggle link={"/register"} />
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
    </Container>
  );
}

export default TableComponent;
