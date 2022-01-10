import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
  transition: all 0.3s;

  @media (max-width: 990px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
    height: 100%;
    width: 350px;
    background-color: rgba(255, 255, 255, 0.9);
    position: fixed;
    top: 0;
    left: ${(props) => (props.open ? "0" : "-100%")};
    z-index: 10;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    position: absolute;
    top: 0;
    left: ${(props) => (props.open ? "0" : "-100%")};
    z-index: 10;
  }
`;

export const NavItem = styled.li`
  list-style: none;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  letter-spacing: 2px;
  transition: all 0.3s;

  &:hover {
    margin-left: 20px;
    text-shadow: 2px 4px 6px black;
  }
`;

export const MobileMenu = styled(FaBars)`
  color: black;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 990px) {
    display: block;
  }
`;

export const CloseMenu = styled(FaTimes)`
  color: black;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  position: absolute;
  top: 2rem;
  right: 2rem;

  @media (max-width: 990px) {
    display: block;
  }
`;
