import styled from "styled-components";
import ImageBeachCoast from "../../images/beach-coast.jpg";

export const ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;

  @media (max-width: 990px) {
    grid-template-columns: 2fr;
  }
`;
export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const SectionTitle = styled.h4`
  font-size: 3rem;
  color: #d6a27a;
  margin-bottom: 30px;

  @media (max-width: 414px) {
    font-size: 2rem;
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  width: 450px;
  height: auto;
  overflow: hidden;

  @media (max-width: 414px) {
    width: 330px;
    height: auto;
  }

  @media (max-width: 320px) {
    width: 300px;
    height: auto;
  }

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.4s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ContentMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  column-gap: 20px;
  padding: 0 30px;

  @media (max-width: 990px) {
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }

  h5 {
    font-size: 2rem;
    color: black;
    text-transform: uppercase;
    letter-spacing: 3px;

    @media (max-width: 320px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.4rem;
    color: black;
    margin: 15px 0;

    @media (max-width: 990px) {
      text-align: center;
    }

    @media (max-width: 320px) {
      font-size: 1rem;
    }
  }

  button {
    color: black;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    border-bottom: 1px solid black;
    background: none;
    padding: 5px 0;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      color: #d6a27a;
      border-bottom: 1px solid #d6a27a;
    }
  }
`;

export const ContentRight = styled.div`
  width: 450px;
  height: 850px;
  background: url("${ImageBeachCoast}") no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;

  @media (max-width: 990px) {
    width: 100%;
    height: 500px;
  }
`;

export const ContentRightText = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 30px 30px;

  h5 {
    font-size: 2rem;
    color: black;
    text-transform: uppercase;
    letter-spacing: 3px;

    @media (max-width: 320px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.4rem;
    color: black;
    margin: 15px 0;

    @media (max-width: 320px) {
      font-size: 1rem;
    }
  }

  button {
    color: black;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    border-bottom: 1px solid black;
    background: none;
    padding: 5px 0;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      color: #d6a27a;
      border-bottom: 1px solid #d6a27a;
      letter-spacing: 5px;
    }
  }
`;

export const RectangleWrapper = styled.div`
  display: flex;

  @media (max-width: 990px) {
    display: none;
  }
`;

export const Rectangle = styled.div`
  width: 100%;
  height: 200px;
  background-color: #e2bc9e;
  flex-basis: 50%;
  transform: translateY(-150px);
  z-index: 0;
`;
