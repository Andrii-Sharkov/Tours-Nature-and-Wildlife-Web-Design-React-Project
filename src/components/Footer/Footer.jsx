import React from "react";
import { Container } from "../Global-styles/CreateGlobalStyles";
import { StyledFooter, FooterContent } from "./FooterStyledElements";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <p>The Website is created with ❤️️ by Andrew Sharkov. Cheers.</p>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
