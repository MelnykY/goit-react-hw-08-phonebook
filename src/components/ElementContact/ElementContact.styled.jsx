import styled from 'styled-components';

export const ListElem = styled.li`
  display: flex;
  flex-basis: calc((100% - 20px - 60px) / 3);
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  padding: 10px;
  border-radius: 2px;
  color: #354649;
  background: #a3c6c4;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const Button = styled.button`
  padding: 5px 15px;
  border: 1px solid black;
  border-radius: 2px;
  border-color: white;
  background-color: transparent;
  color: white;

  :hover,
  :focus {
    background-color: #6c7a89;
    color: white;
  }
`;
