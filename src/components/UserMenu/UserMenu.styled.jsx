import styled from '@emotion/styled';

export const UserMenuList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-right: 15px;
`;

export const Button = styled.button`
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

export const Text = styled.p`
  margin-right: 10px;
  font-weight: 500;
  color: #13507b;
`;
