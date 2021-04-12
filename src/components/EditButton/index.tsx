import React from "react";

import { Container } from "./styles";

import { BsPencil } from "react-icons/bs";

interface EditButtonProps {
  onClick?(): void;
  className?: string;
  color?: string;
}

function EditButton({ onClick, className, color }: EditButtonProps) {
  return (
    <Container className={className ?? ""} onClick={onClick}>
      <BsPencil color={color ?? "#7D938A"} />
    </Container>
  );
}

export default EditButton;
