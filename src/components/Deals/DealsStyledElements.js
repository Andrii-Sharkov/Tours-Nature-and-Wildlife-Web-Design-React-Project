import styled from "styled-components";

export const DealsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;

  @media (max-width: 990px) {
    grid-template-columns: auto;
  }
`;

export const ImageContentRowTop = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 540px) {
    align-items: center;
    justify-content: center;
  }
`;

export const ImageWrapperOne = styled.div`
  width: 300px;
  height: 450px;
  border: 10px solid white;

  @media (max-width: 360px) {
    width: 250px;
    height: 380px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ImageWrapperTwo = styled.div`
  width: 400px;
  height: 550px;
  border: 10px solid white;

  @media (max-width: 375px) {
    width: 330px;
    height: 470px;
    margin: 0 auto;
  }

  @media (max-width: 360px) {
    width: 250px;
    height: 380px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ImageContentRowBottom = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ImageWrapperThree = styled.div`
  width: 700px;
  height: 500px;
  border: 10px solid #e2bc9e;
  transform: translate(60px, -70px);

  @media (max-width: 768px) {
    width: 600px;
    height: 400px;
  }

  @media (max-width: 540px) {
    width: 500px;
    height: 330px;
    transform: translate(0, -20px);
  }

  @media (max-width: 414px) {
    width: 360px;
    height: 250px;
  }

  @media (max-width: 360px) {
    width: 300px;
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ImageWrapperFour = styled.div`
  width: 300px;
  height: 400px;
  border: 10px solid white;
  transform: translate(150px, -50px);

  @media (max-width: 414px) {
    transform: translate(50px, -40px);
  }

  @media (max-width: 375px) {
    transform: translate(25px, -40px);
  }

  @media (max-width: 360px) {
    transform: translate(0px, -40px);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const DealsContentTextRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 50px 0;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`;

export const DealsContentTextLeft = styled.div`
  width: 100%;
  display: flex;
  padding: 0 50px;

  h3 {
    font-size: 4rem;
    color: black;

    @media (max-width: 540px) {
      font-size: 3rem;
    }
  }
`;

export const DealsContentTextRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 50px;

  p {
    font-size: 1.3rem;
    margin-bottom: 30px;

    @media (max-width: 540px) {
      font-size: 1.1rem;
      margin-top: 15px;
    }
  }
`;
