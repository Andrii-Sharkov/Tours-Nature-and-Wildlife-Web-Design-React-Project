import React, { useState } from "react";
import {
  Nav,
  NavList,
  NavItem,
  NavLink,
  MobileMenu,
  CloseMenu,
} from "./NavbarStyledElements";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const onClickOpenMenu = () => {
    setClick(!click);
  };

  return (
    <>
      <Nav>
        <NavList click={click} open={click}>
          <CloseMenu onClick={onClickOpenMenu} />
          <NavItem>
            <NavLink to="/" onClick={onClickOpenMenu}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" onClick={onClickOpenMenu}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/deals" onClick={onClickOpenMenu}>
              Deals
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/experience" onClick={onClickOpenMenu}>
              Experience
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/explore" onClick={onClickOpenMenu}>
              Explore
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/holidays" onClick={onClickOpenMenu}>
              Holidays
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/sighup" onClick={onClickOpenMenu}>
              Sign Up
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
      <MobileMenu onClick={onClickOpenMenu} />
    </>
  );
};

export default Navbar;
