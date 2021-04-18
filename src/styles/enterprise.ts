import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 605px;
  display: flex;
  flex-direction: column;

  .background {
    height: 594px;
    background-image: url('/enterprise/suit.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
  }

  .action {
    height: 594px;
    width: 50%;
  }

  .textBlock {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 200%;
    position: relative;
    top: 150px;
    left: 25%;
    color: ${({ theme }) => theme.colors.background};

    h2 {
      font-weight: bold;
      font-size: 48px;
      margin-top: 0%;
      margin-bottom: 0;
      width: 100vw;
    }

    p {
      width: 300px;

      font-size: 24px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
    }
  }

  .primary-button {
    top: -125px;

    position: relative;
    border-radius: 10px;

    padding-left: 18px;
    padding-top: 7px;
    padding-right: 18px;
    padding-bottom: 7px;

    display: block;
    margin-left: 12.5%;

    font-weight: bold;
    font-size: 24px;
    line-height: 28px;

    color: ${({ theme }) => theme.colors.background};
  }

  @media (max-width: 768px) {
    height: 386px;
    .background {
      height: 219px;
    }

    .action {
      height: 219px;
      top: 1rem;
      left: 1rem;
    }

    .textBlock {
      display: flex;
      flex-direction: column;
      justify-content: center;

      width: 100%;

      position: relative;
      top: 50px;

      h2 {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.background};
      }
    }

    p {
      display: block;
      margin-left: auto;
      margin-right: auto;

      position: relative;
      top: 1rem;
      max-width: 300px;

      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: center;
      color: ${({ theme }) => theme.colors.primary};
    }

    .primary-button {
      position: relative;
      top: 20px;

      display: block;
      margin-left: auto;
      margin-right: auto;

      font-size: 16px;
      line-height: 19px;
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

export const FirstSection = styled.section`
  max-width: 1620px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};

  .carousel {
    width: 80%;
    margin: 2rem auto;
    .slick-arrow {
      display: flex !important;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      height: 100%;
      width: 35px;
      &:before {
        content: '';
      }
    }
  }
  @media (max-width: 768px) {
    h2 {
      text-align: center;
    }
    .slick-list {
      width: 80%;
    }
    .slick-slider {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: 480px) {
    max-width: 100vw;
  }
`
export const SecondSection = styled.section`
  max-width: 1420px;
  margin: 2rem auto;

  display: flex;
  align-items: center;
  justify-content: center;

  & > * {
    flex: 1;
    margin: 4rem;
  }

  .main {
    .item {
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
      padding: 0.5rem;
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      color: ${({ theme }) => theme.colors.primary};
      font-size: ${({ theme }) => theme.textSizes.large};
      margin: 2rem 0;
      p {
        margin: 0;
      }
      .arrow-right {
        width: 0;
        height: 0;
        border-top: 16px solid transparent;
        border-bottom: 16px solid transparent;

        border-left: 16px solid ${({ theme }) => theme.colors.primary};

        padding-left: 1rem;
      }
    }
  }
  .action {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: ${({ theme }) => theme.textSizes.extra};
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary};
    }
    button {
      color: ${({ theme }) => theme.colors.txtPrimary};
      font-size: ${({ theme }) => theme.textSizes.large};
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    & > * {
      flex: 1;
      margin: 1rem;
    }

    .main {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .item {
        flex: 1;
        width: 100%;

        .arrow-right {
          border-top: 1rem solid transparent;
          border-bottom: 1rem solid transparent;

          border-left: 16px solid ${({ theme }) => theme.colors.primary};

          padding-left: 1rem;
        }
      }
    }
    .action {
      p {
        text-align: center;
        font-size: ${({ theme }) => theme.textSizes.large};
      }
    }
  }
`

export const ThirdSection = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url('/enterprise/backcoin.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .content {
    max-width: 1224px;
  }

  .title {
    margin-top: 86px;
    margin-bottom: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary};
    img {
      padding-right: 2rem;
    }
    h2 {
      margin: 0 0 1rem 0;
      text-align: center;
      font-size: ${({ theme }) => theme.textSizes.extra};
      font-weight: bold;
    }
    p {
      text-align: center;
      font-size: ${({ theme }) => theme.textSizes.large};
      margin: 0;
    }
  }

  .carousel {
    width: 100%;
    box-sizing: border-box;
    margin: 2rem auto;
    margin-bottom: 83px;
    .slick-next:before {
      content: '';
    }
    .slick-prev:before {
      content: '';
    }
    .slick-arrow {
      display: flex !important;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      height: 100%;
      width: 35px;
      &:before {
        content: '';
      }
    }
  }
  @media (max-width: 768px) {
    .content {
      max-width: 100%;
      .title {
        flex-direction: column;
        img {
          padding-right: 0;
        }
      }
    }
  }
`
export const WhiteSlide = styled.div`
  background: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  display: flex !important;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 335px !important;
  height: 532px;
  color: ${({ theme }) => theme.colors.primary};
  padding: 3rem 31px;
  margin: auto;
  img {
    width: 88px;
    height: 88px;
  }
  h2 {
    font-size: ${({ theme }) => theme.textSizes.extra};
    font-weight: bold;
    text-align: center;
  }
  p {
    font-size: ${({ theme }) => theme.textSizes.large};
    text-align: center;
  }
  @media (max-width: 768px) {
    width: 100% !important;
  }
`

export const FourthSection = styled.section`
  max-width: 1224px;
  margin: 5rem auto;
  padding: 3rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  color: ${({ theme }) => theme.colors.txtPrimary};
  h2 {
    color: ${({ theme }) => theme.colors.txtPrimary};
    font-size: ${({ theme }) => theme.textSizes.extra};
    font-weight: bold;
  }

  p {
    font-size: ${({ theme }) => theme.textSizes.large};
    text-align: justify;
  }

  img {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 10px;
    margin-right: 1rem;
    width: 445px;
    height: 484px;
  }

  button {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.textSizes.large};
    font-weight: bold;
    padding: 0.5rem 4rem;
    cursor: pointer;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    width: 100%;
    box-sizing: border-box;
    h2 {
      font-size: ${({ theme }) => theme.textSizes.extra};
      max-width: 80%;
    }
    img {
      width: 80%;
      height: unset;
      margin-right: 0;
    }
    .content {
      width: 80%;
      flex-direction: column;
    }
  }
`
