import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

export const Container = styled.div`
  width: 70%;
  margin: 15px auto 0;
  text-align: left;

  h1 {
    margin-top: 20px;
  }

  form {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    button {
      margin-right: 20px;
    }

    small {
      color: #333;
    }
  }
`;

export const SearchInput = styled(Input)`
  border: 1px solid #ddd;
  height: 28px;
  color: #424242;
  padding: 0 8px;
  margin-right: 12px;
  width: ${props => props.widthSize && props.widthSize}px;
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  margin-top: 30px;

  li {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 16px;
      color: #333;
      text-transform: capitalize;
      margin-top: 5px;
    }

    > div {
      margin-top: 4px;
    }

    img {
      border-radius: 4px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  margin-top: 5px;

  span {
    font-size: 14px;
    margin-left: 5px;
  }
`;
