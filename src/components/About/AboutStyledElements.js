import styled from "styled-components";

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    width: 100%;
  }
`;

export const AboutContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translate(200px, 80px);

  @media (max-width: 768px) {
    transform: translate(0, 0);
  }
`;

export const VerticalSquare = styled.div`
  width: 90px;
  height: 350px;
  background-color: #e2bc9e;
  margin-top: 100px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AboutContentRight = styled.div`
  width: 500px;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    transition: all 0.4s;
    cursor: pointer;

    &:hover {
      transform: scale(1.07);
    }
  }

  p {
    width: 400px;
    margin-top: 30px;
    font-size: 1.4rem;

    @media (max-width: 440px) {
      width: 300px;
    }

    @media (max-width: 320px) {
      font-size: 1rem;
    }
  }
`;
