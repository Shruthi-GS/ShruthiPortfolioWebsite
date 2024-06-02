import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem><a href="#home">Home</a></NavItem>
        <NavItem><a href="#about">About</a></NavItem>
        <NavItem><a href="#projects">Projects</a></NavItem>
        <NavItem><a href="#skills">Skills</a></NavItem>
        <NavItem><a href="#education">Education</a></NavItem>
        <NavItem><a href="#internship">Internship</a></NavItem>
        <NavItem><a href="#contact">Contact</a></NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  background: #ffe4e1;
  color: #000;
  padding: 1em 0;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 15px;
  a {
    color: #000;
    text-decoration: none;
    font-weight: 700;
    transition: color 0.3s ease;
  }
  a:hover {
    color: #ff69b4;
  }
`;
