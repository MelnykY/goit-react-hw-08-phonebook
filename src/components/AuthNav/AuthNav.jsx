import { AuthLink, Wrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">Log in</AuthLink>
    </Wrapper>
  );
};
