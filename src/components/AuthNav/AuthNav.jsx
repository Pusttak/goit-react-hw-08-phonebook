import { NavList, NavItem } from './AuthNav.styled';

const AuthNav = () => (
  <NavList>
    <li>
      <NavItem to="login">Login</NavItem>
    </li>
    <li>
      <NavItem button="true" to="register">
        Sign Up
      </NavItem>
    </li>
  </NavList>
);

export default AuthNav;
