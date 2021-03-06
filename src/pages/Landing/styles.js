import styled from 'styled-components';

const Container = styled.div``;

const Content = styled.div`
  max-width: 1000px;
  margin: auto;

  .register {
    margin-top: 100px;
    display: flex;
    &__info {
      width: 50%;
      color: #4b4b4b;
      & > h2 {
        font-size: 2.2em;
        font-weight: bold;
      }
      & > p {
        width: 400px;
        font-size: 1.5em;
        margin: 20px 0;
        font-weight: 200;
        line-height: 39px;
      }
    }

    &__form {
      margin-bottom: 50px;
      &__actions {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        > button {
          width: 140px;
          height: 40px;
          border: none;
          background: #e86a5c;
          font-weight: bold;
          color: #fff;
          font-size: 1.1em;
          margin-top: 5px;
          margin-right: 8px;
          &:hover {
            cursor: pointer;
          }
        }
      }
      form {
        margin: 0 50px;
        display: flex;
        flex-direction: column;
        input {
          margin: 10px;
          margin-right: 8px;

          border: 1px solid #ddd;
          height: 28px;
          color: #424242;
          padding: 0 8px;
          margin-right: 12px;
        }
      }
    }
  }

  .for-school {
    display: flex;
    padding: 100px 0;
    &__info {
      width: 50%;
      color: #4b4b4b;
      & > h2 {
        font-size: 2.2em;
        font-weight: bold;
      }
      & > p {
        width: 400px;
        font-size: 1.5em;
        margin: 20px 0;
        font-weight: 200;
        line-height: 39px;
      }
    }
    &__image {
      width: 47%;
      object-fit: cover;
      margin-left: 20px;
    }
  }
  .for-company {
    display: flex;
    padding: 100px 0;
    &__info {
      width: 50%;
      color: #4b4b4b;
      & > h2 {
        font-size: 2.2em;
        font-weight: bold;
      }
      & > p {
        width: 400px;
        font-size: 1.5em;
        margin: 20px 0;
        font-weight: 200;
        line-height: 39px;
      }

      a {
        padding: 15px 25px;
        width: 140px;
        height: 40px;
        border: none;
        background: #e86a5c;
        font-weight: bold;
        color: #fff;
        font-size: 1.1em;
        margin-top: 5px;
        margin-right: 8px;
        &:hover {
          cursor: pointer;
        }
      }
    }
    &__image {
      width: 47%;
      object-fit: cover;
      margin-left: 20px;
    }
  }
`;

const Cover = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.35) 16.67%,
      rgba(0, 0, 0, 0.17) 100%
    ),
    url(${require('../../images/landing-cover.jpeg')});
  background-position: center;
  background-size: cover;

  .header {
    width: 100%;
    color: #fff;
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    & > h2 {
      font-size: 2em;
      font-weight: 200;
    }
    & > ul {
      list-style: none;
      display: flex;
      li {
        font-size: 1.2em;
        font-weight: 200;
        margin: 0 10px;
        cursor: pointer;
      }
    }
  }

  .search-bg {
    background-image: url(${require('../../images/overlay.png')});
    background-repeat: no-repeat;
    background-size: 1080px auto;
  }

  .search-container {
    position: relative;
  }

  .search-bg {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 99;

    background-position: center -70px;
    filter: blur(10px);
  }

  .search {
    width: 500px;
    position: relative;
    z-index: 100;
    padding: 20px;
    background: rgb(34, 34, 34);
    background: rgba(34, 34, 34, 0.75);
    padding: 30px 50px;
    text-align: start;
  }

  & .cover-box {
    position: absolute;
    bottom: 50px;
    left: 50px;
    color: #fff;

    & h1 {
      margin: 0;
      animation: 1.5s ease-in-out 0s normal none running showTitle;
    }
    & p {
      margin: 10px 0 20px 0;
      font-size: 1.5em;
      font-weight: 200;
      animation: 3s ease-in-out 0s normal none running showTitle;
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
      animation: 4.5s ease-in-out 0s normal none running showTitle;
      cursor: pointer;
    }
  }
  @keyframes showTitle {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
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

const Info = styled.div`
  width: 100%;
  height: 300px;
  background: ${props => (props.secundary ? '#F3F3F3' : '#d65648')};
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > .item {
    width: 150px;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    color: ${props => (props.secundary ? '#D65648' : '#FFF')};
    display: flex;
    flex-direction: column;
    & > img {
      margin-bottom: 15px;
    }
  }
`;

const Footer = styled.div`
  width: 100%;
  background: #fa8072;
  margin-top: -4px;
  padding: 50px;
  display: flex;
  justify-content: center;
  z-index: 9;
  & > .column {
    width: 220px;
    color: #fff;
    margin: 0 20px;

    & > h2 {
      font-size: 1.8em;
      font-weight: 200;
      margin-bottom: 20px;
      line-height: 39px;
    }
    & > span,
    & > p {
      font-size: 1.2em;
      font-weight: 100;
      line-height: 25px;
    }
  }
`;

export { Info, ArrowIcon, Cover, Content, Container, Footer };
