import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 605px;
  display: flex;
  flex-direction: column;

  .background {
    height: 594px;
    background-image: url('/paravoce/Foto homens seção 1.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
  }

  .action {
    height: 594px;
    width: 50%;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.background} 0%,
      rgba(255, 254, 254, 0) 100%
    );
  }

  .textBlock {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 200%;
    position: relative;
    top: 150px;
    left: 25%;
    color: ${({ theme }) => theme.colors.primary};

    h2 {
      font-weight: bold;
      font-size: 72px;
      margin-top: 0%;
      margin-bottom: 0;
      width: 100vw;
    }

    p {
      width: 300px;

      font-size: 24px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
    }
  }

  .primary-button {
    top: -200px;

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
    height: 327px;
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
      }
    }

    p {
      display: block;
      margin-left: auto;
      margin-right: auto;

      position: relative;
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
  width: 100%;
  height: 11px;
  background: linear-gradient(
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.quaternary}
  );
  @media (max-width: 768px) {
    height: 3px;
  }
`

export const FirstSection = styled.section`
  width: 100%;
  height: 565px;
  margin-top: 165px;
  margin-bottom: 6px;

  .background {
    height: 565px;

    background-image: url('/paravoce/Mundo em pixels.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .action {
    position: relative;
    top: -165px;
    left: 0;
    width: 100%;
    height: 736px;
    background: linear-gradient(
      -172.2deg,
      ${({ theme }) => theme.colors.background} 19.21%,
      rgba(255, 255, 255, 0) 97.72%
    );
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

      color: ${({ theme }) => theme.colors.primary};
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

        color: ${({ theme }) => theme.colors.primary};
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

          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }
    .primary-button {
      margin-top: 40px;
      position: relative;
      max-width: 400px;
      height: 56px;

      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.primary}6 0%,
        ${({ theme }) => theme.colors.quaternary} 100%
      );
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

      padding-left: 50px;
      padding-right: 50px;
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
      text-align: center;

      color: ${({ theme }) => theme.colors.background};
    }
  }

  @media (max-width: 1360px) {
    height: 500px;
    margin-top: 120px;

    .background {
      height: 132px;

      background-position: top;
    }

    .action {
      height: 0px;
      background: linear-gradient(
        -172.2deg,
        ${({ theme }) => theme.colors.background} 0%,
        rgba(255, 255, 255, 0) 0%
      );
    }

    .block {
      flex-direction: column;
      height: 600px;

      .textBlock {
        width: 100%;
      }

      h2 {
        position: relative;
        top: 280px;
        display: flex;
        justify-content: center;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
      }

      img {
        position: relative;
        top: -30px;
        display: block;

        margin-left: auto;
        margin-right: auto;

        width: 237px;
        height: 178px;
      }

      .transferBox {
        position: relative;
        top: 100px;
        width: 298px;
        height: 308px;
      }

      .transferBoxText {
        width: 298px;
        margin-left: 43;

        h2 {
          font-size: 0px;
          line-height: 0px;
        }

        .item {
          justify-content: center;
          margin-top: 10px;

          img {
            top: 0px;
            width: 20.39px;
            height: 20.39px;
          }

          p {
            width: 198px;
            height: 12px;

            font-size: 12px;
            line-height: 14px;
          }
        }
      }

      .primary-button {
        margin-top: 25px;
        max-width: 219px;
        height: 29px;

        padding-left: 25px;
        padding-right: 25px;

        font-size: 12px;
        line-height: 14px;
      }
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
    /* margin-top: 106px; */
    position: relative;
    height: 1000px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      font-weight: bold;
      font-size: 48px;
      line-height: 56px;
      text-align: center;

      color: ${({ theme }) => theme.colors.background};
    }

    p {
      max-width: 725px;

      font-weight: 300;
      font-size: 24px;
      line-height: 34px;
      text-align: center;

      color: ${({ theme }) => theme.colors.background};
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

  @media (max-width: 768px) {
    background-position: -100px;
    height: 596px;

    .gradient {
      position: relative;
      height: 360px;
    }

    .block {
      position: relative;
      height: 475px;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;

      h2 {
        max-width: 236px;

        font-size: 20px;
        line-height: 23px;
      }

      p {
        max-width: 252px;

        font-size: 14px;
        line-height: 16px;
      }

      .carousel {
        width: 90%;
        margin-bottom: 0px;
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

    color: ${({ theme }) => theme.colors.primary};
  }
  h4 {
    align-items: center;
    height: 183px;

    font-style: normal;
    font-weight: 300;
    font-size: 22px;
    line-height: 26px;
    text-align: center;

    color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 768px) {
    height: 269px;
    margin: auto;
    img {
      height: 75.54px;
    }
    h3 {
      font-size: 20px;
      line-height: 23px;
    }
    h4 {
      margin: 0;
      font-size: 16px;
      line-height: 19px;
    }
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

    background: ${({ theme }) => theme.colors.secondary};
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

  @media (max-width: 1024px) {
    .box {
      width: 90%;
    }
  }

  @media (max-width: 768px) {
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;

      width: 333px;

      h2 {
        width: 200px;

        font-size: 20px;
        line-height: 23px;
      }

      p {
        font-size: 12px;
        line-height: 14px;
      }
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
  background: ${({ theme }) => theme.colors.textPrimary};
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
      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.background} 0%,
        rgba(255, 255, 255, 0) 54.86%
      );

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

        color: ${({ theme }) => theme.colors.primary};
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
      width: 350px;
      font-style: normal;
      font-weight: bold;
      font-size: 40px;
      line-height: 47px;
      text-align: center;

      color: ${({ theme }) => theme.colors.primary};
    }

    .primary-button {
      margin-top: 40px;
      position: relative;
      max-width: 400px;
      height: 56px;

      background: linear-gradient(
        180deg,
        ${({ theme }) => theme.colors.primary} 0%,
        ${({ theme }) => theme.colors.quaternary} 100%
      );
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);

      padding-left: 50px;
      padding-right: 50px;
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
      text-align: center;

      color: ${({ theme }) => theme.colors.background};
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    top: -75px;

    width: 100%;
    height: 841px;

    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);

    .imgBox {
      display: flex;
      margin-left: auto;
      margin-right: auto;

      width: 85%;
      height: 389px;

      border-radius: 10px;

      .fade {
        width: 100%;
        height: 389px;

        text {
          top: 0px;

          margin-top: 21px;

          font-size: 20px;
          line-height: 23px;
        }
      }
    }

    .itemBox {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 13px;

      .item {
        margin-top: 25px;
        img {
          width: 4px;
          height: 8px;
          margin-right: 13px;
        }

        h3 {
          font-size: 12px;
          line-height: 14px;
        }
      }
    }

    .textBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 80%;
      margin-left: auto;
      margin-right: auto;

      h2 {
        width: 100%;
        font-size: 20px;
        line-height: 23px;
      }

      .primary-button {
        margin-top: 16px;
        max-width: 100%;
        height: 46px;

        padding-left: 25px;
        padding-right: 25px;

        font-size: 16px;
        line-height: 18.78px;
        text-align: center;
      }
    }
  }
`

export const ForthSection = styled.section`
  margin-top: 42px;
  width: 100%;
  height: 902px;

  background: ${({ theme }) => theme.colors.primary};
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

      color: ${({ theme }) => theme.colors.background};
    }

    h2 {
      margin-top: 0px;
      font-style: italic;
      font-weight: bold;
      font-size: 90px;
      line-height: 106px;
      text-align: center;

      color: ${({ theme }) => theme.colors.background};
    }

    .itemBox {
      width: 80%;
      margin-left: auto;
      margin-right: auto;

      .item {
        width: 295px;
        height: 352px;
        background: url('/paravoce/SETA NEWS 1.png');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        h3 {
          position: relative;
          top: 200px;
          left: -100px;
          font-style: normal;
          font-weight: bold;
          font-size: 36px;
          line-height: 42px;
          text-align: center;

          color: ${({ theme }) => theme.colors.background};

          transform: rotate(-44.74deg);
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: 588px;

    .block {
      height: 100%;

      p {
        margin-top: 55px;
        font-size: 14px;
        line-height: 16px;
      }

      h2 {
        font-size: 44px;
        line-height: 52px;
      }

      .itemBox {
        width: 100%;

        .item {
          height: 229.85px;
          background-size: contain;

          h3 {
            top: 125px;
            left: -50px;
            font-size: 20px;
            line-height: 23px;
          }
        }
      }
    }
  }
`
export const SecondFloating = styled.section`
  position: relative;
  top: -100px;

  width: 90%;
  height: 512px;

  .test {
    position: relative;
    display: block;
    margin: auto;

    width: 404px;
    height: 512px;

    .box {
      overflow: visible;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-left: auto;
      margin-right: auto;

      width: 90%;
      height: 508px;

      background: ${({ theme }) => theme.colors.background};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      .rect {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        position: relative;
        margin-left: auto;
        margin-right: auto;

        width: 93px;
        height: 93px;
        background: #fdfdfd;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;

        img {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          width: 49px;
          height: 49px;
          background: ${({ theme }) => theme.colors.background};
        }
      }

      h2 {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        text-align: center;

        color: ${({ theme }) => theme.colors.primary};
      }

      p {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 28px;
        text-align: center;

        color: ${({ theme }) => theme.colors.primary};
      }

      .primary-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin-left: auto;
        margin-right: auto;
        width: 275px;
        height: 55px;

        background: ${({ theme }) => theme.colors.secondary};
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;

        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: ${({ theme }) => theme.colors.background};
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 414.36px;

    .test {
      width: 314.67px;
      height: 414.36px;

      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 85% !important;
        height: 410px;

        margin-left: auto;
        margin-right: auto;

        border-radius: 10px;

        .rect {
          width: 72.44px;
          height: 72.44px;

          img {
            width: 35.05px;
            height: 35.05px;
          }
        }

        h2 {
          font-size: 20px;
          line-height: 23px;
        }

        p {
          font-size: 12px;
          line-height: 14px;
        }

        .primary-button {
          width: 214.19px;
          height: 42.84px;

          font-size: 16px;
          line-height: 19px;
        }
      }
    }
  }
`
