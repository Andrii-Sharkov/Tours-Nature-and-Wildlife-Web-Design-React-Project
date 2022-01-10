import React from "react";
import { Container } from "../Global-styles/CreateGlobalStyles";
import Navbar from "../Navbar/Navbar";
import { HeaderElements, StyledHeader, Logo } from "./HeaderStyledElements";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <HeaderElements>
          <Logo to="/">
            <p>Nature</p>
          </Logo>
          <Navbar />
        </HeaderElements>
      </Container>
    </StyledHeader>
  );
};

export default Header;
