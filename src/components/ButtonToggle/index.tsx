import React from "react";
import { Button } from "@material-ui/core/";

import { Container } from "./styles";
import { Link } from "react-router-dom";

interface ButtonToggleProps {
  link: string;
}

function ButtonToggle({ link }: ButtonToggleProps) {
  return (
    <Container>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        color="primary"
        variant="contained"
      >
        <Link to={link}>ADICIONAR</Link>
      </Button>
    </Container>
  );
}

export default ButtonToggle;
