import React from "react";

import { HiPlus } from "react-icons/hi";

import { Container } from "./styles";

interface ButtonAddProps {
  onClick?(): void;
  className?: string;
  color?: string;
  title?: string;
}

function ButtonAdd({ onClick, className, color, title }: ButtonAddProps) {
  return (
    <Container>
      <HiPlus size={20} />
      {title ?? "adicionar"}
    </Container>
  );
}

export default ButtonAdd;
