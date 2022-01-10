import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  background-color: white;
  width: 100%;
  height: 10vh;
  padding: 15px 0;
`;

export const HeaderElements = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  font-size: 3rem;
  color: black;
  text-decoration: none;
`;
