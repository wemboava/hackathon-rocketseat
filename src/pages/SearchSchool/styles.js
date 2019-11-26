import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  margin: 15px auto 0;
  text-align: left;

  form {
    margin-top: 20px;
    display: flex;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      height: 28px;
      border-radius: 4px;
      padding: 0 12px;
      margin-right: 8px;
    }

    > button {
      width: 100px;
      height: 28px;
      font-weight: bold;
      color: #333;
      border-radius: 4px;
      border: 0;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
