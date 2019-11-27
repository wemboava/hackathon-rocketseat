import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Info, ArrowIcon, Cover, Content, Container, Footer } from './styles';

export default () => {
  function showDown() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }

  function onSubmit() {
    console.log('submit');
  }

  return (
    <Container>
      <Cover>
        <div className="cover-box">
          <div className="search-container">
            <div className="search-bg" />
            <div className="search">
              <h1>ESCOLA CONECTADA</h1>
              <p>
                Lorem ipsum dolor init Lorem ipsum dolor init Lorem ipsum dolor
                init dolor init
              </p>
              {/* eslint-disable-next-line */}
              <button>CADASTRO</button>
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
          <span>Soluções para sua Escola</span>
        </div>
        <div className="item">
          <img alt="icon" src={require('../../images/icon.svg')} />
          <span>Soluções para sua Escola</span>
        </div>
        <div className="item">
          <img alt="icon" src={require('../../images/icon.svg')} />
          <span>Soluções para sua Escola</span>
        </div>
        <div className="item">
          <img alt="icon" src={require('../../images/icon.svg')} />
          <span>Soluções para sua Escola</span>
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
          <img alt="icon" src={require('../../images/icon.svg')} />
          <span>Soluções para sua Escola</span>
        </div>
        <div className="item">
          <img alt="icon" src={require('../../images/icon.svg')} />
          <span>Soluções para sua Escola</span>
        </div>
        <div className="item">
          <img alt="icon" src={require('../../images/icon.svg')} />
          <span>Soluções para sua Escola</span>
        </div>
        <div className="item">
          <img alt="icon" src={require('../../images/icon.svg')} />
          <span>Soluções para sua Escola</span>
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
              <Input name="name" placeholder="Nome do responsável" />

              <Input name="email" placeholder="E-mail" />
              <Input name="schoolName" placeholder="Nome Empresa / Escola" />
              <Input name="name" placeholder="Nome da Escola" />
              <Input name="tel" placeholder="Telefone do responsável" />

              <div>
                <Input name="city" placeholder="Cidade" />
                <Input name="state" placeholder="Estado" />
              </div>

              <Input name="neighborhood" placeholder="Bairro" />
              <Input name="street" placeholder="Endereço" />
              <Input name="complement" placeholder="Complemento" />
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
      <Footer />
    </Container>
  );
};
