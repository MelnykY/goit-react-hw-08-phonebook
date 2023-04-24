import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { UserName, Wrapper, Button } from './UserMenu.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

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
        <FontAwesomeIcon icon={faRightFromBracket} style={{ color: '#a3c6c4' }} />
      </Button>
    </Wrapper>
  );
};

export default UserMenu;
