import React from "react";

import { Container, TitleList, ImageHeader } from "./styles";

import Unibode from "../../assets/img/unibode_pink.png";

interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <Container>
      <ImageHeader src={Unibode} />
      <TitleList>{title}</TitleList>
    </Container>
  );
}

export default Header;
