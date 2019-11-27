import React from 'react';

import { Container, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo>LOGO</Logo>

      <ul>
        <li>Cadastro</li>
        <li>Login</li>
      </ul>
    </Container>
  );
}
