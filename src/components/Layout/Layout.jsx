import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <Container>
      <header className="header">
        <p className="logo">MovieSearcher</p>
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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
