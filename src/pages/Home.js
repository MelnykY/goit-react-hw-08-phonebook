import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

const Box = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Text = styled.p`
  margin-bottom: 2px;
  font-size: 16px;
  font-weight: 400;
  color: #354649;
`;

const Link = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  color: rgb(9 9 121);
  background-color: transparent;
  border: none;
  cursor: pointer;

  :hover,
  :focus {
    color: #a3c6c4;
  }
`;
const Section = styled.section`
  margin: ${props => props.margin || '40px 0 0 0'};
`;

const Title = styled.h1`
  margin: ${props => props.margin || '0 0 20px 0'};
  text-align: ${props => props.position || 'start-left'};
  font-size: 50px;
  font-weight: 800;
  line-height: 1.33;
  color: #6c7a89;
`;

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Section margin="calc(10%) 0 0 0">
        <Title size="30px" margin="0 0 20px 0" position="center">
          ...this is NOT a search engine...
          <br />
          ...this is a FIND PHONE NUMBER engine:) <br />
          <br /> Just manage your contacts easily with our
          <br />
          <b>
            {' '}
            PHONEBOOK{' '}
            <FontAwesomeIcon
              icon={faAddressBook}
              style={{ color: '#6c7a89' }}
            />
          </b>{' '}
        </Title>
      </Section>
      {!isLoggedIn ? (
        <Box>
          <Text>
            You need to be <Link to="/login">logged in</Link> to your account to view your
            contacts.
          </Text>
          <Text>
            If you are not registered yet, please{' '}
            <Link to="/register">sing up</Link>
          </Text>
        </Box>
      ) : (
        <Box>
          <Text>
            You can view <Link to="/contacts"> your contacts</Link>
          </Text>
        </Box>
      )}
      ;
    </>
  );
};

export default Home;
