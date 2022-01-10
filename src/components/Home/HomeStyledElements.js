import styled from "styled-components";
import HeroImage from "../../images/hero-background.jpg";

export const HomeSection = styled.section`
  background: url("${HeroImage}") no-repeat center center/cover;
  height: 90vh;
  background-attachment: fixed;
`;

export const HomeContent = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HomeTitleWrapper = styled.div`
  width: 350px;
  margin: 70px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 30px;
`;
