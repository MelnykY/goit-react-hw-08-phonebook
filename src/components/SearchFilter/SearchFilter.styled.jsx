import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  color: rgb(9 9 121);
  font-size: 15px;
  font-weight: 500;
  margin-top: 0;
  color: #354649;
`;

export const Input = styled.input`
  margin: 10px 0 10px 25px;
  padding: 0 20px;
  background: #fff;
  line-height: 40px;
  border-width: 0;
  border-radius: 2px;
  font-family: 'Roboto', sans-serif;
  font-style: italic;
  font-size: 18px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  &:focus {
    outline: none;
  }
  :hover {
    background-color: #a3c6c4;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
`;
