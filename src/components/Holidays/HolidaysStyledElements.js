import styled from "styled-components";
import { TiWavesOutline } from "react-icons/ti";

export const HolidaysContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  button {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: bold;
    border: 2px solid #d6a27a;
    border-radius: 10px;
    color: black;
    background-color: white;
    padding: 15px 30px;
    width: 230px;
    height: 60px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      border: 2px solid black;
    }
  }
`;

export const HolidaysContentTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  h5 {
    color: black;
    font-size: 3rem;
    font-weight: bold;
  }
`;

export const IconWaves = styled(TiWavesOutline)`
  color: #d6a27a;
  font-size: 3rem;
`;

export const ImagesDataWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
  margin: 30px 0;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }

  img {
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(1.06);
    }
  }
`;
