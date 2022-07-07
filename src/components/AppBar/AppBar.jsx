import { useSelector } from 'react-redux';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { HeadBar } from './AppBar.styled';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return <HeadBar>{isLoggedIn ? <UserMenu /> : <AuthNav />}</HeadBar>;
};

export default AppBar;
