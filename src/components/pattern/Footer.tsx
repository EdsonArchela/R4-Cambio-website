import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  background: linear-gradient(
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.primary}
  );

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'logo social map'
    'web web web';

  padding: 2rem 1rem 1rem 0;
  color: ${({ theme }) => theme.colors.txtPrimary};

  #footer-logo {
    grid-area: logo;
    padding: 2rem !important;
  }

  .social {
    grid-area: social;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
      text-align: center;
    }
    .social-icons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 50%;
      img {
        width: 48px;
        height: 48px;
      }
    }
    .phone {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
  }

  .map {
    grid-area: map;
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      margin-right: 1rem;
    }
    ul {
      border-left: 2px solid white;
      li {
        a {
          color: ${({ theme }) => theme.colors.txtPrimary};
          &:hover {
            font-size: 1.2rem;
          }
        }
      }
    }
    @media (max-width: 1024px) {
      flex-direction: column;
      ul {
        border: none;
      }
    }
  }

  #web {
    grid-area: web;
    margin: auto;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'social'
      'map'
      'logo'
      'web';
    #web {
      margin: auto;
      text-align: center;
    }
  }
`

const Footer = () => (
  <Container>
    <Image src="/assets/logo.svg" alt="R4 Câmbio" id="footer-logo" width={325} height={151} />
    <div className="social">
      <h2>SIGA-NOS</h2>
      <div className="social-icons">
        <img src="/assets/instagram.png" alt="Instagram" />
        <img src="/assets/Facebook.svg" alt="Facebook" />
        <img src="/assets/LinkedIN.svg" alt="LinkedIn" />
      </div>
      <h2>ATENDIMENTO PERSONALIZADO</h2>
      <div className="phone">
        <img src="/assets/call.svg" alt="" />
        <span>+55 43 3142-1032</span>
      </div>
    </div>
    <div className="map">
      <h2>MAPA DO SITE</h2>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/para-voce">Para você</Link>
        </li>
        <li>
          <Link href="/para-empresa">Para sua empresa</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contato">Contato</Link>
        </li>
      </ul>
    </div>
    <p id="web">Desenvolvido por TechArc Apps - Trazendo vida às suas ideias</p>
  </Container>
)

export default Footer
