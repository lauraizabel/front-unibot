import React from "react";

import { BsTrash } from "react-icons/bs";

import { Container } from "./styles";

interface DeleteButtonProps {
  onClick?(): void;
  className?: string;
  color?: string;
}

function DeleteButton({ onClick, className, color }: DeleteButtonProps) {
  return (
    <Container className={className ?? ""} onClick={onClick}>
      <BsTrash color={color ?? "#7D938A"} />
    </Container>
  );
}

export default DeleteButton;
