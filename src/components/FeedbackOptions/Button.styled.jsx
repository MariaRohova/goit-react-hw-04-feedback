import styled from 'styled-components';

export const Button = styled.div`
  padding: 10px;
  button {
    border: none;
    border-radius: 5px;
    padding: 10px;
    color: white;
    background-color: darkblue;
    cursor: pointer;
    :not(:last-child) {
      margin-right: 10px;
    }
    :hover {
      background-color: darkblue;
    }
  }
`;
