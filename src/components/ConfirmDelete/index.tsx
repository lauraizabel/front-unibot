import React from "react";

import { IoAlertCircleOutline } from "react-icons/io5";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import { Container } from "./styles";
import { AxiosResponse } from "axios";

interface ConfirmDeleteProps {
  onAgree: (id: string) => void | Promise<void> | Promise<AxiosResponse<any>>;
  onDisagree: () => void;
  open: boolean;
  handleClose: () => void;
  id: string;
  text: string;
}

function ConfirmDelete({
  onAgree,
  onDisagree,
  open,
  handleClose,
  id,
  text,
}: ConfirmDeleteProps) {
  return (
    <Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="alert-dialog-title">
          <IoAlertCircleOutline size={54} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onDisagree} color="primary">
            CANCELAR
          </Button>
          <Button onClick={() => onAgree(id)} color="primary" autoFocus>
            DELETAR
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default ConfirmDelete;
