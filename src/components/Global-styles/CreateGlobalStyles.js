import styled from "styled-components";

export const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const BigTitle = styled.h2`
  font-size: ${(props) => (props.fontSize4 ? "4rem" : "5rem")};
  color: ${(props) => (props.chocolateColor ? "#D6A27A" : "white")};
  width: ${(props) => (props.width300 ? "300px" : "0")};

  @media (max-width: 990px) {
    font-size: 3rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 2rem;
  color: white;
  line-height: 1.5;

  @media (max-width: 990px) {
    font-size: 1.5rem;
    line-height: 1.3;
  }
`;

export const Button = styled.button`
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  text-transform: uppercase;
  width: 230px;
  height: 60px;
  padding: 15px 30px;
  border-radius: 10px;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s;

  @media (max-width: 990px) {
    font-size: 1rem;
    width: 200px;
    background: transparent;
    border: 1px solid white;
    color: white;
  }

  &:hover {
    background: transparent;
    color: ${(props) => (props.hoverTextColor ? "" : "white")};
    border: 4px solid white;
  }
`;

export const Section = styled.section`
  background-color: ${(props) =>
    props.backgroundColorCream ? "#EFD7C6" : "#FFFF"};
  padding: 50px 0;
  animation: test 0.5s;

  @keyframes test {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;
