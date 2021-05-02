import React from "react";

import { Container, TitleList, ImageHeader, Logout } from "./styles";

import Unibode from "../../assets/img/unibode_pink.png";

import { CgLogOut } from "react-icons/cg";
import { removeAuthData } from "../../services/auth";
import { useHistory } from "react-router";

interface HeaderProps {
  title?: string;
}

function Header({ title }: HeaderProps) {
  const history = useHistory();

  const handleLogout = () => {
    removeAuthData();
    history.push("/login");
  };

  return (
    <Container>
      <ImageHeader src={Unibode} />
      <Logout onClick={handleLogout}>
        <CgLogOut />
        <h5>Logout</h5>
      </Logout>
      <TitleList>{title}</TitleList>
    </Container>
  );
}

export default Header;
