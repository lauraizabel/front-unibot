import React from "react";

import { Button } from "@material-ui/core";

import { BiSave } from "react-icons/bi";

import { Container } from "./styles";

interface ButtonsFooterProps {
  onClickCancel(): void;
  onClickSave(e?: any): void | Promise<void>;
}

function ButtonsFooter({ onClickCancel, onClickSave }: ButtonsFooterProps) {
  return (
    <Container>
      <Button
        startIcon={<BiSave />}
        variant="contained"
        color="default"
        onClick={onClickSave}
        type="submit"
      >
        SALVAR
      </Button>
      <Button variant="contained" color="secondary" onClick={onClickCancel}>
        CANCELAR
      </Button>
    </Container>
  );
}

export default ButtonsFooter;
