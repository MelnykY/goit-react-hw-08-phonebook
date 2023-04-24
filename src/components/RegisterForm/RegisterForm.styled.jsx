import { Field, Form } from 'formik';
import styled from 'styled-components'; 

export const Title = styled.h2`
  display: inline-block;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 50px;
  color: #6c7a89;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
`;

export const FormBox = styled(Form)`
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 25px;
  padding: 30px;
  width: 440px;
  max-width: 440px;
  height: 720px;
  max-height: 720px;
  background: white;
  border-radius: 1px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  & label {
    display: flex;
    flex-direction: column;
    color: #354649;
    margin-bottom: 10px;
    width: 100%;
    & span {
      margin-bottom: 10px;
      font-size: 20px;
      text-align: left;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;
`;

export const Text = styled.span`
  text-align: left;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

export const Input = styled(Field)`
  padding: 0 20px;
  margin-bottom: 10px;
  background: #e0e7e9;
  line-height: 40px;
  border-width: 0;
  border-radius: 2px;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  &::placeholder {
    font-size: 15px;
  }
  &:focus {
    outline: none;
  }
  :hover {
    background-color: #a3c6c4;
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
`;

export const ErrorMessageText = styled.p`
  text-align: left;
  margin-top: 10px;
  color: red;
  font-size: 17px;
`;

export const SubmitButton = styled.button`
  height: 40px;
  background-color: #a3c6c4;
  border-radius: 2px;
  color: #354649;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover {
    background-color: #6c7a89;
    color: #e0e7e9;
  }
`;
