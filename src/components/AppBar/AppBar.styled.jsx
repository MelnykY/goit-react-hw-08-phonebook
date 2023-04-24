import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: -1px;
  padding: 15px 30px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  background-color: #354649;
  border-bottom: 1px solid black;

  & a {
    color: #e0e7e9;
   
  }

  & a.active {
    padding: 5px;
    color: #a3c6c4;
    border: none;
  text-decoration: underline;
  }

  & a.active svg {
    display: block;
  }
`;
