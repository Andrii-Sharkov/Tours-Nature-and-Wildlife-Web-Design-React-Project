import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #333333;
  height: 8vh;

  @media (max-width: 575px) {
    height: 10vh;
  }

  @media (max-width: 332px) {
    height: 13vh;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px 0;

  p {
    font-size: 1.3rem;
    color: white;
  }
`;
