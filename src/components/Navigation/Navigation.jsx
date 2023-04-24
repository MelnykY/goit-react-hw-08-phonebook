import { useAuth } from 'hooks/useAuth';
import { Nav, Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <Link to="/">HOME</Link>
      {isLoggedIn && <Link to="/contacts">CONTACTS</Link>}
    </Nav>
  );
};


