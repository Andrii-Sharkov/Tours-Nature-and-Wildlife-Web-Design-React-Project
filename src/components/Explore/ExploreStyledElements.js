import styled from "styled-components";
import ImageBackground from "../../images/background-2.jpg";

export const ExploreBackground = styled.section`
  background: url("${ImageBackground}") no-repeat center center / cover;
  height: 100vh;
  background-attachment: fixed;
`;

export const ExploreContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  transform: translateY(180px);
`;

export const ExploreTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 30px;
  width: 400px;

  h4 {
    color: black;
    font-size: 3rem;

    @media (max-width: 540px) {
      font-size: 2rem;
      color: white;
    }
  }

  p {
    color: black;
    font-size: 1.4rem;

    @media (max-width: 540px) {
      color: white;
    }
  }
`;
