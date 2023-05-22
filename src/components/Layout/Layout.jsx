import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <header className="header">
        <p className="logo">Кінопошук</p>
        <nav className="navigation">
          <NavLink className="menu" to="/">
            Home
          </NavLink>
          <NavLink className="menu" to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
