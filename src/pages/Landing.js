import React from "react";
import styled from 'styled-components'

const Container = styled.div`
  height: 5000px;
`;

const Content = styled.div`
  max-width: 1100px;
  margin: auto;
`;

const Cover = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background-image: url(${require('../images/landing-cover.jpeg')});
  background-position: center;
  background-size: cover;
  & .cover-box {
    max-width: 500px;
    border-radius: 10px;
    position: absolute;
    bottom: 100px;
    left: 100px;
    background-color: rgba(0, 0, 0, .5);
    color: #FFF;
    padding: 20px 50px;
    text-align: start;

    & button {
      width: 164px;
      height: 50px;
      border: none;
      background: #E86A5C;
      font-weight: bold;
      color: #FFF;
      font-size: 1.1em;
    }
  }
`;

export default props => {
  return (
    <Container>
      <Cover>
        <div className="cover-box">
          <h1>ESCOLA CONECTADA</h1>
          <p>Lorem ipsum dolor init Lorem ipsum dolor init Lorem ipsum dolor init dolor init</p>
          <button>CADASTRO</button>
        </div>
      </Cover>
      <Content>

      </Content>
    </Container>
  );
}
