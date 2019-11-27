import React, { useEffect, useState } from 'react';
import { Form } from '@rocketseat/unform';
import { MdMailOutline } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';

import api from '../../services/api';
import schoolImage from '../../images/school.jpeg';

import Header from '../../components/Header';
import Button from '../../components/Button';

import { Container, SearchInput, Grid, School, Info } from './styles';

export default function SearchSchool() {
  const [schools, setSchools] = useState([]);

  async function loadAllSchools() {
    const response = await api.get('/school');
    setSchools(response.data);
  }

  async function onSubmit({ state, city, name }) {
    const response = await api.get(
      `/school?city=${city}&name=${name}&state=${state}`
    );
    setSchools(response.data);
  }

  useEffect(() => {
    loadAllSchools();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h1>Pesquise pela escola que deseja realizar o evento</h1>
        <Form onSubmit={onSubmit}>
          <div>
            <SearchInput name="state" placeholder="Estado" widthSize={60} />
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
            <small>{schools.length} resultados encontrados</small>
          </div>
        </Form>

        <Grid>
          {schools.map(school => (
            <School key={school._id}>
              <img src={schoolImage} alt="" />
              <strong>{school.name}</strong>
              <div>
                <Info>
                  <MdMailOutline size={16} />
                  <span>{school.email}</span>
                </Info>
                <Info>
                  <GoLocation size={16} />
                  <span>
                    {school.neighborhood}, {school.city}
                  </span>
                </Info>
              </div>
            </School>
          ))}
        </Grid>
      </Container>
    </>
  );
}
