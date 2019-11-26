import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 5000px;
`;

const Content = styled.div`
  max-width: 1100px;
  margin: auto;

  .for-school {
    display: flex;
    &__info {
      width: 50%;
      color: #4b4b4b;
    }
    &__image {
      width: 50%;
    }
  }
`;

const Cover = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background-image: url(${require('../images/landing-cover.jpeg')});
  background-position: center;
  background-size: cover;
  & .cover-box {
    max-width: 400px;
    border-radius: 10px;
    position: absolute;
    bottom: 100px;
    left: 100px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 20px 50px;
    text-align: start;
    & h1 {
      margin: 0;
    }
    & p {
      margin: 10px 0 20px 0;
      font-size: 1.5em;
      font-weight: 200;
    }
    & button {
      width: 164px;
      height: 50px;
      border: none;
      background: #e86a5c;
      font-weight: bold;
      color: #fff;
      font-size: 1.1em;
      margin-top: 5px;
    }
  }
`;

const ArrowIcon = styled.span`
  display: none;
  position: absolute;
  left: calc(50% - 21px);
  bottom: 5px;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: block;
  }
  & .icon {
    fill: #fff;
    animation: 2.6s ease-in-out 0s infinite normal none running Arrow;
  }

  @keyframes Arrow {
    0%,
    60%,
    100% {
      transform: translate3d(0px, 0px, 0px);
    }
    80% {
      transform: translate3d(0px, 2px, 0px);
    }
    70%,
    90% {
      transform: translate3d(0px, 7px, 0px);
    }
  }
`;

export default props => {
  function showDown() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  }

  return (
    <Container>
      <Cover>
        <div className="cover-box">
          <h1>ESCOLA CONECTADA</h1>
          <p>
            Lorem ipsum dolor init Lorem ipsum dolor init Lorem ipsum dolor init
            dolor init
          </p>
          <button>CADASTRO</button>
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
          <div className="for-school__image" />
        </div>
      </Content>
    </Container>
  );
};
