import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  background: #e86a5c;
  border: 0;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 13px;
  height: 28px;
  padding: 0 15px;
  transition: background 0.2s;

  &:hover {
    cursor: pointer;
    background: ${darken(0.03, '#e86a5c')};
  }
`;
