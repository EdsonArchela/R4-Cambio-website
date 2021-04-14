import styled from 'styled-components'

export const Main = styled.main`
  background-image: url('/paravoce/Foto homens seção 1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0;
  width: 100%;
  height: 605px;
  position: relative;

  .action {
    color: #055556;
    top: 0;
    left: 0;
    width: 50%;
    height: 605px;
    background: linear-gradient(90deg, #fffefe 0%, rgba(255, 254, 254, 0) 100%);
  }

  .textBlock {
    position: relative;
    top: 150px;
    left: 250px;
    h2 {
      font-weight: bold;
      font-size: 72px;
      margin-top: 0%;
      margin-bottom: 0;
    }

    p {
      font-size: 24px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
    }

    .primary-button {
      border-radius: 10px;

      padding-left: 18px;
      padding-top: 7px;
      padding-right: 18px;
      padding-bottom: 7px;

      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;

      color: #ffffff;
    }
  }
  @media (max-width: 768px) {
    height: 500px;
    .action {
      top: 1rem;
      left: 1rem;
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
  background-image: url('/paravoce/Mundo em pixels.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 165px;
  margin-bottom: 6px;
  width: 100%;
  height: 565px;

  .action {
    position: relative;
    top: -165px;
    left: 0;
    width: 100%;
    height: 736px;
    background: linear-gradient(-172.2deg, #ffffff 19.21%, rgba(255, 255, 255, 0) 97.72%);
  }

  .block {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 736px;

    .textBlock {
      flex-direction: column;
      width: 50%;
    }

    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 56px;

      color: #055556;
    }

    img {
      margin-left: 0px;
      width: 571px;
      height: 430px;
    }

    .transferBox {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 570px;
      height: 653px;

      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    }

    .transferBoxText {
      flex-direction: column;
      display: flex;
      justify-content: center;
      width: 400px;
      margin-left: 43;
      h2 {
        margin: 0;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 56px;

        color: #055556;
      }

      .item {
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
          width: 39px;
          height: 39px;
          margin-right: 1rem;
        }
        p {
          width: 380px;
          height: 23px;

          font-weight: normal;
          font-size: 18px;
          line-height: 21px;

          color: #055556;
        }
      }
    }
    .primary-button {
      margin-top: 40px;
      position: relative;
      max-width: 400px;
      height: 56px;

      background: linear-gradient(180deg, #055556 0%, #10b1c0 100%);
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

      padding-left: 50px;
      padding-right: 50px;
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
      text-align: center;

      color: #ffffff;
    }
  }
`

export const SecondSection = styled.section`
  background-image: url('/paravoce/Foto seção 3 - mulher sorrindo.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 88px;
  width: 100%;
  height: 1069px;

  .gradient {
    width: 100%;
    height: 645px;

    background: linear-gradient(180deg, #111726 0%, rgba(5, 85, 86, 0) 100%);
  }

  .block {
    margin-top: 106px;
    position: relative;
    top: -645px;
    height: 769px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      font-weight: bold;
      font-size: 48px;
      line-height: 56px;
      text-align: center;

      color: #ffffff;
    }

    p {
      font-weight: 300;
      font-size: 24px;
      line-height: 34px;
      text-align: center;

      color: #ffffff;
    }

    .carousel {
      width: 75%;
      box-sizing: border-box;
      margin: 2rem;
      margin-bottom: 83px;
      .slick-next:before {
        content: '';
      }
      .slick-prev:before {
        content: '';
      }
    }
  }
`

export const WhiteSlide = styled.div`
  background: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  display: flex !important;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 335px !important;
  height: 532px;
  color: ${({ theme }) => theme.colors.primary};
  padding: 3rem 31px;
  margin: auto;
  img {
    height: 98px;
  }
  h3 {
    height: 176px;

    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 33px;
    text-align: center;

    color: #055556;
  }
  h4 {
    align-items: center;
    height: 183px;

    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 26px;
    text-align: center;

    color: #055556;
  }
  @media (max-width: 768px) {
    width: 100% !important;
  }
`
export const FirstFloating = styled.section`
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -100px;

  .box {
    width: 1223px;
    height: 512px;
    border-radius: 0px;

    background: #2e7e80;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    h2 {
      font-style: normal;
      font-weight: 800;
      font-size: 24px;
      line-height: 48px;
      text-align: center;

      color: #fbfbfb;
    }

    img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 100px;
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;
      text-align: center;

      color: #fafafa;
    }
  }
`

export const ThirdSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;

  width: 1429px;
  height: 731px;

  margin-left: auto;
  margin-right: auto;
  background: #fffbfb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .imgBox {
    background-image: url('/paravoce/Foto seção 4 - mulher com criança.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 459px;
    height: 728px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .fade {
      width: 485px;
      height: 731px;
      background: linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 54.86%);

      text {
        position: relative;
        display: flex;
        width: 100%;
        align-content: center;
        justify-content: center;
        top: 50px;

        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        text-align: center;

        color: #055556;
      }
    }
  }

  .itemBox {
    display: flex;
    flex-direction: column;
    width: 394px;
    margin-left: 91px;
    margin-top: auto;
    margin-bottom: auto;
    justify-self: center;

    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary};

      img {
        width: 16px;
        height: 31px;
        margin-right: 20px;
      }

      h3 {
        font-style: normal;
        font-weight: 300;
        font-size: 28px;
        line-height: 33px;
      }
    }
  }

  .textBox {
    display: flex;
    flex-direction: column;
    margin-left: 91px;
    margin-top: auto;
    margin-bottom: auto;

    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 47px;
      text-align: center;

      color: #055556;
    }

    .primary-button {
      margin-top: 40px;
      position: relative;
      max-width: 400px;
      height: 56px;

      background: linear-gradient(180deg, #055556 0%, #10b1c0 100%);
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

      padding-left: 50px;
      padding-right: 50px;
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
      text-align: center;

      color: #ffffff;
    }
  }
`
export const ForthSection = styled.section`
  margin-top: 42px;
  width: 100%;
  height: 902px;

  background: #055556;
  .block {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 901px;

    background: url('/paravoce/Foto seção 5 - infografico.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    mix-blend-mode: luminosity;

    p {
      margin-top: 73px;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      text-align: center;

      color: #ffffff;
    }

    h2 {
      margin-top: 0px;
      font-style: italic;
      font-weight: bold;
      font-size: 90px;
      line-height: 106px;
      text-align: center;

      color: #ffffff;
    }

    .itemBox {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: relative;

      .item {
        width: 295px;
        height: 352px;
        background: url('/paravoce/SETA NEWS 1.png');

        h3 {
          position: relative;
          top: 200px;
          left: -100px;
          font-style: normal;
          font-weight: bold;
          font-size: 36px;
          line-height: 42px;
          text-align: center;

          color: #ffffff;

          transform: rotate(-44.74deg);
        }
      }
    }
  }
`

export const SecondFloating = styled.section`
  position: relative;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -100px;
  margin-left: auto;
  margin-right: auto;

  width: 1212px;
  height: 532px;

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 404px;
    height: 532px;

    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .rect {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 93px;
      height: 93px;
      background: #fdfdfd;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;

      img {
        width: 49px;
        height: 49px;
        background: #ffffff;
      }
    }

    h2 {
      margin-top: 40px;

      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      text-align: center;

      color: #055556;
    }

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;
      text-align: center;

      color: #055556;
    }

    .primary-button {
      width: 275px;
      height: 55px;

      background: #2e7e80;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;

      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      color: #ffffff;
    }
  }
`
