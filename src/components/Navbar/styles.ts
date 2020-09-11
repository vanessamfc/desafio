import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  display: grid;
  grid-template-areas: 'logo menu';
  grid-template-columns: 1fr 2fr;
  height: 60px;
  position: fixed;
  top: 0;
  background: #fff;
  width: 100%;
  z-index: 300;
  display: flex;
  box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.75);
  > div:first-child {
    grid-area: logo;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 70%;
    top: 0;
    padding-top: 10px;
    > a {
      > svg {
        height: 40px;
        width: 40px;
        color: #392999;
      }
    }
  }
  div:last-child {
    grid-area: menu;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: calc(100% - 20px);
      text-decoration: none;

      padding: 10px;
      margin: 5px;
      border-radius: 5px;
      > a:hover {
        background-color: #e53935aa;
        color: #fff;
        transition: 0.3s;
      }
    }
  }
`;
export const StyledNavLink = styled(NavLink)`
  &.active {
    background-color: #392999;
    color: #fff;
  }
`;
