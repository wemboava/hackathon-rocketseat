import React from 'react';

import { Container, Name, Location } from './styles';

export default function School() {
  return (
    <Container>
      <Name>Nome da Escola</Name>
      <Location>São Paulo - SP</Location>
      <span>
        <strong>Procura: </strong>Tecnologia, Robótica, Programação
      </span>
    </Container>
  );
}
