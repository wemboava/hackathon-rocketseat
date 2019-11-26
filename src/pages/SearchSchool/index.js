import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function SearchSchool() {
  function onSubmit() {
    console.log('submit');
  }

  return (
    <Container>
      <h1>Pesquise pela escola que deseja realizar o evento</h1>
      <Form onSubmit={onSubmit}>
        <Input name="state" placeholder="Digite o Estado" />
        <Input name="city" placeholder="Digite a Cidade" />
        <Input name="name" placeholder="Digite o nome da Escola" />
        <button type="submit">Pesquisar</button>
      </Form>
    </Container>
  );
}
