import React from 'react';

import { Container } from './styles';

export default function Button({ children, onClick, rest }) {
  return (
    <Container onClick={onClick} {...rest}>
      {children}
    </Container>
  );
}
