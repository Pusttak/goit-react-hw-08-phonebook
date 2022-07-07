import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { getUserName } from 'redux/auth/auth-selectors';
import { UserMenuList } from './UserMenu.styled';
import { Button, Text } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <UserMenuList>
      <Text>Hello, {name}</Text>
      <Button button="true" type="button" onClick={handleClick}>
        Log Out
      </Button>
    </UserMenuList>
  );
};

export default UserMenu;
