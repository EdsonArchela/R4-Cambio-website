import styled from 'styled-components'
import { darken } from 'polished'

export const FirstSection = styled.section`
  background-image: url('/home/MainFoto.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 15%;
  width: 100%;
  height: 530px;
  position: relative;

  .detail {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }

  .actionButton {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.txtPrimary};
    font-size: ${({ theme }) => theme.textSizes.extra};
    position: absolute;
    left: 220px;
    bottom: 125px;
  }

  @media (max-width: 480px) {
    width: 100vw;
    height: 300px;
    .detail {
      display: none;
    }
    .actionButton {
      width: 100vw;
      height: 100%;
      position: static;
      align-items: center;
      justify-content: center;
    }
  }
`

export const Coin = styled.img<{ isVisible: boolean }>`
  position: absolute;
  left: calc(50vw - (254px));
  bottom: -254px;
  z-index: 1;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in;
  @media (max-width: 1024px) {
    width: calc(100vw / 4);
    left: calc(50vw - (calc(100vw / 8)));
    bottom: calc(-100vw / 8);
  }
  @media (max-width: 480px) {
    width: calc(100vw / 2);
    left: calc(50vw - (calc(100vw / 4)));
    bottom: calc(-100vw / 4);
    transition: none;
  }
`

export const SecondSection = styled.section<{ isVisible: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  max-width: 1024px;
  margin: auto;
  margin-top: 254px;
  .left {
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(-300px)')};
    transition: opacity 0.5s ease, transform 0.5s ease-in-out;
  }

  .right {
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(300px)')};
    transition: opacity 0.5s ease, transform 0.5s ease-in-out;
  }
  .firstBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    max-width: 608px;
    height: 100%;
    overflow: hidden;
    &:first-child {
      margin-right: 2rem;
    }
    img {
      display: block;
    }
    h2 {
      margin: 0;
      display: block;
      font-weight: bold;
      font-size: ${({ theme }) => theme.textSizes.extra};
      color: ${({ theme }) => theme.colors.primary};
      text-align: center;
    }
  }

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;

    .firstBlock {
      margin-top: calc(100vw / 8);
      height: unset;
      #topOfWorldImg {
        width: calc(100vw / 3);
      }

      h2 {
        font-size: ${({ theme }) => theme.textSizes.extra};
      }
    }
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    transition: none;
    .firstBlock {
      margin-top: 1rem;
      justify-content: center;
      &:first-child {
        margin-top: calc(100vw / 4);
        margin-right: 0;
      }
      #topOfWorldImg {
        width: 290px;
      }
      h2 {
        font-size: ${({ theme }) => theme.textSizes.large};
      }
    }
  }
`

export const ThirdSection = styled.section`
  height: 690px;
  width: 100%;
  padding: 2rem 0;
  margin: 3rem auto;
  background: linear-gradient(${({ theme }) => theme.colors.secondary}, transparent);
  color: ${({ theme }) => theme.colors.txtPrimary};
  text-align: center;

  .content {
    max-width: 1024px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }

  .firstBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    max-width: 608px;
    height: 620px;
    &:first-child {
      margin-right: 2rem;
    }
    img {
      display: block;
    }
    h2 {
      margin: 0;
      display: block;
      font-weight: bold;
      font-size: ${({ theme }) => theme.textSizes.extra};
      color: ${({ theme }) => theme.colors.txtPrimary};
      text-align: center;
    }
  }

  .mobile {
    display: none;
  }

  @media (max-width: 1024px) {
    .content {
      width: 90%;
      #notebookImg {
        width: 550px;
      }
      h2 {
        font-size: ${({ theme }) => theme.textSizes.large};
      }
    }
  }

  @media (max-width: 480px) {
    .mobile {
      display: unset;
    }
    .notMobile {
      display: none;
    }
    height: 100%;
    .content {
      width: 100%;
      flex-direction: column;
    }

    .firstBlock {
      width: 80%;
      justify-content: center;
      height: 100%;
      h2 {
        font-size: ${({ theme }) => theme.textSizes.large};
      }
      &:first-child {
        margin-right: 0;
      }
      #notebookImg {
        width: 80%;
      }
    }
  }
`

export const FourthSection = styled.section<{ isVisible: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 690px;
  max-width: 1350px;
  padding: 2rem;
  margin: 2rem auto;
  color: ${({ theme }) => theme.colors.txtPrimary};
  text-align: center;

  .left {
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(-300px)')};
    transition: opacity 0.5s ease, transform 0.5s ease-in-out;
  }

  .right {
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transform: ${({ isVisible }) => (isVisible ? 'translateX(0)' : 'translateX(300px)')};
    transition: opacity 0.5s ease, transform 0.5s ease-in-out;
  }

  .firstBlock {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    max-width: 608px;
    height: 620px;
    &:first-child {
      margin-right: 2rem;
    }
    img {
      width: 536px;
      height: 384px;
    }
    h2 {
      max-width: 536px;
      margin: 0;
      display: block;
      font-weight: bold;
      font-size: ${({ theme }) => theme.textSizes.large};
      color: ${({ theme }) => theme.colors.primary};
      text-align: justify;
    }

    .item {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
      width: 70%;
      transition: font-weight 0.2s ease-in-out;

      &:hover {
        font-weight: bold;
      }

      img {
        width: 48px;
        height: 48px;
        margin-right: 1rem;
      }
      p {
        color: ${({ theme }) => theme.colors.primary};
        font-size: ${({ theme }) => theme.textSizes.large};
        text-align: left;
      }
    }
  }
  button {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.txtPrimary};
    font-size: ${({ theme }) => theme.textSizes.large};
    font-weight: bold;
    border: none;
    border-radius: 6px;
    padding: 0.75rem 3rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.45);
    &:focus {
      outline: 0;
    }
    &:active {
      box-shadow: none;
      background-color: ${({ theme }) => darken('0.05', theme.colors.primary)};
    }
  }
  @media (max-width: 1024px) {
    .firstBlock {
      h2 {
        font-size: ${({ theme }) => theme.textSizes.extra};
      }
      .item {
        p {
          font-size: ${({ theme }) => theme.textSizes.normal};
        }
      }
    }
  }
  @media (max-width: 480px) {
    flex-direction: column;
    height: 100%;
    width: 80%;
    padding: 0;
    transition: none;
    .firstBlock {
      width: 100%;
      &:first-child {
        margin-right: 0;
      }
      img {
        width: 100%;
        height: unset;
      }
      h2 {
        font-size: ${({ theme }) => theme.textSizes.large};
        margin: 1rem 0;
      }
      .item {
        img {
          width: 28px;
          height: 28px;
          margin-right: 1rem;
        }
        p {
          font-size: ${({ theme }) => theme.textSizes.normal};
        }
      }
    }
    button {
      margin-top: 1rem;
      font-size: ${({ theme }) => theme.textSizes.normal};
    }
  }
`

export const GreenCard = styled.button`
  background-color: ${({ theme }) => theme.colors.ternary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${({ theme }) => theme.colors.txtPrimary};
  padding: 2rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: relative;

  &:hover {
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.4);
    top: -6px;
  }

  &:first-child {
    margin-bottom: 1.5rem;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      color: inherit;
      font-size: ${({ theme }) => theme.textSizes.extra};
    }
  }
  p {
    font-size: ${({ theme }) => theme.textSizes.large};
    text-align: center;
  }

  @media (max-width: 1024px) {
    .title {
      img {
        width: 40px;
      }
      h2 {
        padding-left: 1rem;
        font-size: ${({ theme }) => theme.textSizes.large};
      }
    }
    p {
      font-size: ${({ theme }) => theme.textSizes.normal};
    }
  }

  @media (max-width: 480px) {
    max-width: 290px;
    box-sizing: border-box;
  }
`

export const PickCard = styled.div<{ img: string }>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex !important;
  align-items: center;
  justify-content: center;
  max-width: 509px;
  height: 281px;
  padding: 0.5rem;
  position: relative;

  &:hover {
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.4);
    top: -6px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.txtPrimary};
    font-weight: bold;
    font-size: ${({ theme }) => theme.textSizes.extra};
    text-align: center;
  }
  @media (max-width: 480px) {
    h2 {
      max-width: 80%;
    }
    .slick-slide {
      margin: 0 27px;
    }
    .slick-track {
      border-radius: 10px;
    }
    /* the parent */
    .slick-list {
      margin: 0 -27px;
    }
  }
`
export const Bar = styled.div`
  margin: 0;
  height: 11px;
  width: 100%;
  background: linear-gradient(
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.quaternary}
  );
`
