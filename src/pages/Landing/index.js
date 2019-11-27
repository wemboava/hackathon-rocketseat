import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Info, ArrowIcon, Cover, Content, Container, Footer } from './styles';

export default () => {
  function showDown() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }

  function scrollDown(size) {
    window.scrollTo({
      top: size,
      behavior: 'smooth',
    });
  }

  async function onSubmit(data) {
    await api.post('/school', data);
  }

  return (
    <Container>
      <Cover>
        <header className="header">
          <h2>WLT DISCOVER</h2>
          <ul>
            {/* eslint-disable-next-line */}
            <li onClick={() => scrollDown(650)}>PARA ESCOLA</li>
            {/* eslint-disable-next-line */}
            <li onClick={() => scrollDown(1600)}>PARA EMPRESA</li>
            {/* eslint-disable-next-line */}
            <li onClick={() => scrollDown(2500)}>CADASTRE - SE</li>
          </ul>
        </header>
        <div className="cover-box">
          <div className="search-container">
            <div className="search-bg" />
            <div className="search">
              <h1>ESCOLA CONECTADA</h1>
              <p>Uma plataforma que conecta as escolas com seus mentores</p>
              {/* eslint-disable-next-line */}
              <button onClick={() => scrollDown(2500)}>CADASTRO</button>
            </div>
          </div>
        </div>
        <ArrowIcon onClick={showDown}>
          <svg
            className="icon"
            width="42px"
            height="23px"
            viewBox="0 0 42 32"
            data-id="chevron-icon"
          >
            <path
              transform="translate(-11.000000, -20.000000)"
              d="M36.1855,40.6932598 L52.1385,24.9527656 C53.2895,23.8180105 53.2875,21.9799588 52.1345,20.8481059 C50.9825,19.7152856 49.1175,19.7172204 47.9665,20.8519755 L32.0135,36.5924697 L16.0295,20.8819648 C14.8765,19.7491445 13.0105,19.7510793 11.8615,20.884867 C10.7105,22.019622 10.7125,23.8576737 11.8655,24.9895266 L27.8495,40.7009989 L30.6305,43.434859 C31.3995,44.1894276 32.6435,44.1874928 33.4095,43.4319568 L36.1855,40.6932598 Z"
            />
          </svg>
        </ArrowIcon>
      </Cover>

      <Content>
        <div className="for-school">
          <div className="for-school__info">
            <h2>PARA ESCOLAS</h2>
            <p>
              Lorem ipsum dolor init Lorem ipsum dolor init Lorem ipsum dolor
              init dolor initLorem ipsum dolor init Lorem ipsum dolor init Lorem
              ipsum dolor init dolor init Lorem ipsum dolor init Lorem ipsum
              dolor init Lorem ipsum dolor init dolor init
            </p>
            <p>Lorem ipsum dolor init Lorem ipsum dolor init dolor init</p>
          </div>
          <img
            className="for-school__image"
            alt="school-image1"
            src={require('../../images/school.png')}
          />
        </div>
      </Content>
      <Info>
        <div className="item">
          <img alt="icon" src={require('../../images/icon.svg')} />
          <span>Encontre o profissional que precisa</span>
        </div>
        <div className="item">
          <img alt="icon" src={require('../../images/icon2.svg')} />
          <span>Inclusão Social</span>
        </div>
        <div className="item">
          <img alt="icon" src={require('../../images/icon3.svg')} />
          <span>Soluções de ensino para escola</span>
        </div>
        <div className="item">
          <img alt="icon" src={require('../../images/icon4.svg')} />
          <span>Tecnologias novas para agregar valor</span>
        </div>
      </Info>
      <Content>
        <div className="for-company">
          <div className="for-company__info">
            <h2>PARA MENTORES/EMPRESA</h2>
            <p>
              Lorem ipsum dolor init Lorem ipsum dolor init Lorem ipsum dolor
              init dolor initLorem ipsum dolor init Lorem ipsum dolor init Lorem
              ipsum dolor init dolor init Lorem ipsum dolor init Lorem ipsum
              dolor init Lorem ipsum dolor init dolor init
            </p>
            <p>Lorem ipsum dolor init Lorem ipsum dolor init dolor init</p>

            <Link to="/search">Buscar Escolas</Link>
          </div>
          <img
            className="for-company__image"
            alt="company-image1"
            src={require('../../images/company.jpeg')}
          />
        </div>
      </Content>
      <Info secundary>
        <div className="item">
          <img alt="icon" src={require('../../images/icon6.svg')} />
          <span>Soluções para sua Escola</span>
        </div>
        <div className="item">
          <img alt="icon" src={require('../../images/icon7.svg')} />
          <span>Garanta a inclusão de seu produto em escolas</span>
        </div>
        <div className="item">
          <img alt="icon" src={require('../../images/icon8.svg')} />
          <span>Aprendizado para toda vida</span>
        </div>
        <div className="item">
          <img alt="icon" src={require('../../images/icon9.svg')} />
          <span>Garanta a inclusão social à tecnologia</span>
        </div>
      </Info>

      <Content>
        <div className="register">
          <div className="register__info">
            <h2>VENHA PARA WLT DISCOVER</h2>
            <p>
              Lorem ipsum dolor init Lorem ipsum dolor init Lorem ipsum dolor
              init dolor initLorem ipsum dolor init Lorem ipsum dolor init Lorem
              ipsum dolor init dolor init Lorem ipsum dolor init Lorem ipsum
              dolor init Lorem ipsum dolor init dolor init
            </p>
            <p>
              Lorem ipsum dolor init Lorem ipsum dolor init dolor init dolor
              init Lorem ipsum dolor init dolor init
            </p>
          </div>
          <div className="register__form">
            <Form onSubmit={onSubmit}>
              <Input
                name="responsible_name"
                placeholder="Nome do responsável"
              />

              <Input name="email" placeholder="E-mail" />
              <Input name="name" placeholder="Nome Empresa / Escola" />
              {/* <Input name="name" placeholder="Nome da Escola" /> */}
              <Input name="phone" placeholder="Telefone do responsável" />

              <div>
                <Input name="city" placeholder="Cidade" />
                <Input name="state" placeholder="Estado" />
              </div>

              <Input name="neighborhood" placeholder="Bairro" />
              <Input name="address1" placeholder="Endereço" />
              <Input name="address2" placeholder="Complemento" />
              <div className="register__form__actions">
                <button type="submit">Cadastrar</button>
              </div>
            </Form>
          </div>
        </div>
        <img
          className="team"
          alt="team"
          src={require('../../images/team.png')}
        />
      </Content>
      <Footer>
        <div className="column">
          <h2>WLT DISCOVER</h2>
          <p>Uma plataforma que conecta as escolas com seus mentores</p>
        </div>
        <div className="column">
          <span>Home</span>
          <span>Para Escola</span>
          <span>Para Mentor/Empresa</span>
          <span>Cadastro Login</span>
        </div>
        <div className="column">
          <span>
            Rua Rocketseat, 285
            <br /> São Paulo - SP
            <br /> 131287-219
            <br /> contato@empresa.com.br
            <br />
            <br /> FACE - INSTA - TWITTER
          </span>
        </div>
      </Footer>
    </Container>
  );
};
