import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Logo from '../../images/logo.svg';

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  text-decoration: none;

  &.current-page {
    border-bottom: 2px solid #222;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => (
  <header
    css={css`
      background: #e5e5e5;
      border-bottom: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem calc((100vw - 945px) / 2) 0;
      @media (max-width: 1040px) {
        padding: 0.5rem calc((100vw - 740px) / 2) 0;
      }
      @media (max-width: 820px) {
        padding: 0.5rem calc((100vw - 550px) / 2) 0;
      }
      @media (max-width: 610px) {
        padding: 0.5rem calc((100vw - 400px) / 2) 0;
      }
      @media (max-width: 420px) {
        padding: 0.5rem calc((100vw - 300px) / 2) 0;
      }
    `}
  >
    <NavLink to="/" fontWeight="bold">
      <img src={Logo} alt="Logo"
        css={css`
        width: 50px;
        height: 30px;
      `}></img>
    </NavLink>
    <nav
      css={css`
        margin-top: 0;
      `}
    >
      <NavLink to="/" activeClassName="current-page">
        Главная
      </NavLink>
      <NavLink to="/wine/" activeClassName="current-page">
        Вино
      </NavLink>
      <NavLink to="/overview/" activeClassName="current-page">
        Обзоры
      </NavLink>
    </nav>
  </header >
);

export default Header;
