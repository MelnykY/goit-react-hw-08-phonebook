import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  text-align: center;
  height: 100vh;

  & h1,
  h2 {
    margin: 0;
    color: #354649;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
`;

export const Text = styled.h2`
  font-size: 30px;
`;

export const Message = styled.p`
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  background-color: #e0e7e9;
`;
