import React from 'react';
import { Form } from '@rocketseat/unform';
import { MdMailOutline } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';

import schoolImage from '../../images/school.jpeg';

import Button from '../../components/Button';

import { Container, SearchInput, Grid, Info } from './styles';

export default function SearchSchool() {
  function onSubmit() {
    // console.log('submit');
  }

  return (
    <Container>
      <h1>Pesquise pela escola que deseja realizar o evento</h1>
      <Form onSubmit={onSubmit}>
        <div>
          <SearchInput name="state" placeholder="Estado" widthSize={80} />
          <SearchInput
            name="city"
            placeholder="Digite a Cidade"
            widthSize={220}
          />
          <SearchInput
            name="name"
            placeholder="Digite o nome da Escola"
            widthSize={220}
          />
          <Button type="submit">Pesquisar</Button>
        </div>
        <div>
          <small>12 resultados encontrados</small>
        </div>
      </Form>

      <Grid>
        <li>
          <img src={schoolImage} alt="" />
          <strong>Nome da escola</strong>
          <div>
            <Info>
              <MdMailOutline size={16} />
              <span>email@email.com</span>
            </Info>
            <Info>
              <GoLocation size={16} />
              <span>Bairro Consolação, São Paulo - SP</span>
            </Info>
          </div>
        </li>
        <li>
          <img src={schoolImage} alt="" />
          <strong>Nome da escola</strong>
          <div>
            <Info>
              <MdMailOutline size={16} />
              <span>email@email.com</span>
            </Info>
            <Info>
              <GoLocation size={16} />
              <span>Bairro Consolação, São Paulo - SP</span>
            </Info>
          </div>
        </li>
        <li>
          <img src={schoolImage} alt="" />
          <strong>Nome da escola</strong>
          <div>
            <Info>
              <MdMailOutline size={16} />
              <span>email@email.com</span>
            </Info>
            <Info>
              <GoLocation size={16} />
              <span>Bairro Consolação, São Paulo - SP</span>
            </Info>
          </div>
        </li>
        <li>
          <img src={schoolImage} alt="" />
          <strong>Nome da escola</strong>
          <div>
            <Info>
              <MdMailOutline size={16} />
              <span>email@email.com</span>
            </Info>
            <Info>
              <GoLocation size={16} />
              <span>Bairro Consolação, São Paulo - SP</span>
            </Info>
          </div>
        </li>
      </Grid>
    </Container>
  );
}
