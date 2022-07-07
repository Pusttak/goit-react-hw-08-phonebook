import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-right: 15px;
`;

export const NavItem = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 8px 12px;
  border: 1px solid transparent;
  background-color: ${props => (props.button ? '#166095' : 'none')};
  color: ${props => (props.button ? '#ffffff' : '#166095')};
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 14px;

  :hover {
    background-color: ${props => (props.button ? '#13507b' : 'none')};
    border: ${props => (props.button ? '1px solid transparent' : '1px solid #166095')};
  }
`;
