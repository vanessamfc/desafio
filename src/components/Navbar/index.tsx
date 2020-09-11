import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaw } from 'react-icons/fa';
import { Container, StyledNavLink } from './styles';

const Navbar: React.FC = () => {
  return (
    <Container className="navBar">
      <div>
        <Link to="/">
          <FaPaw />
        </Link>
      </div>
      <div>
        <StyledNavLink to="/add-dog">Adicionar</StyledNavLink>
        <StyledNavLink to="/list">Lista</StyledNavLink>
      </div>
    </Container>
  );
};

export default Navbar;
