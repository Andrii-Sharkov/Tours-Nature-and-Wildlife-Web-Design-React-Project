import styled from "styled-components";
import ImageBackground3 from "../../images/couple-keeps-hands.jpg";

export const SighupBackground = styled.div`
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
    url("${ImageBackground3}") no-repeat center center / cover;
  height: 90vh;
  background-attachment: fixed;
`;

export const SighupFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 500px;
  margin: 0 auto;
  transform: translateY(150px);
  border: 2px solid #d6a27a;
  border-radius: 10px;
  padding: 0 20px;
  background: transparent;

  @media (max-width: 768px) {
    width: 100%;
    height: 500px;
  }

  @media (max-width: 414px) {
    width: 100%;
    height: 600px;
  }

  h6 {
    color: black;
    font-size: 3rem;

    @media (max-width: 540px) {
      font-size: 2rem;
    }

    @media (max-width: 414px) {
      text-align: center;
    }
  }

  p {
    font-size: 1.2rem;
    margin: 30px 0;

    @media (max-width: 540px) {
      font-size: 1rem;
      text-align: center;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  input[type="text"] {
    flex: 20%;
    background-color: #e5e5e5;
    color: darkGray;
    font-size: 1rem;
    padding: 10px 0 10px 10px;
    border: none;
  }

  input[type="email"] {
    flex: 20%;
    background-color: #e5e5e5;
    color: darkGray;
    font-size: 1rem;
    padding: 10px 0 10px 10px;
    border: none;
  }

  input[type="number"] {
    flex: 20%;
    background-color: #e5e5e5;
    color: darkGray;
    font-size: 1rem;
    padding: 10px 0 10px 10px;
    border: none;
  }

  textarea {
    flex: 100%;
    height: 100px;
    background-color: #e5e5e5;
    color: darkGray;
    font-size: 1rem;
    padding: 10px 0 10px 10px;
    border: none;
  }

  button {
    background-color: #d6a27a;
    width: 100%;
    height: 40px;
    font-size: 1rem;
    color: white;
    padding: 10px 0;
    border: none;
    letter-spacing: 3px;
  }
`;
