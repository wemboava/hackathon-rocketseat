import styled from 'styled-components';

export const Container = styled.header`
  background: #fafafa;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #ddd;
  padding: 0 20%;

  ul {
    display: flex;
    color: #f24038;
    font-weight: bold;

    li {
      font-size: 15px;
      &:not(:last-child) {
        margin-right: 16px;
      }
    }
  }
`;

export const Logo = styled.span`
  text-transform: uppercase;
  color: #f24038;
  font-size: 18px;
  font-weight: bold;
`;
