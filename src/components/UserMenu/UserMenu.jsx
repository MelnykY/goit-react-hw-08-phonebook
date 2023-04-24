import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { UserName, Wrapper, Button } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <Button type="button" onClick={onLogOut}>
        Logout
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
