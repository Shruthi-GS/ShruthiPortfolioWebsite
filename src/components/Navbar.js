import React, { useState } from 'react';
import styled from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo href="#home">My Portfolio</Logo>
      <Hamburger onClick={toggleNavbar}>
        <span />
        <span />
        <span />
      </Hamburger>
      <NavList isOpen={isOpen}>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 1em;
  color: #000;
  text-decoration: none;

  &:hover {
    color: #ff69b4;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-right: 1em;

  span {
    height: 3px;
    width: 25px;
    background: #000;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px; /* Adjust according to your Navbar height */
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    background: #ffe4e1;
    transition: left 0.3s ease-in-out;
  }
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

  @media (max-width: 768px) {
    margin: 15px 0;
    text-align: center;
  }
`;
