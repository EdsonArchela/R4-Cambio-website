import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { useRouter } from 'next/dist/client/router'

const Container = styled.nav`
  background: linear-gradient(
    ${({ theme }) => theme.colors.secondary},
    ${({ theme }) => theme.colors.primary}
  );

  width: 100vw;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;

  img {
    padding: 1rem !important;
  }
  ul {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin: 0;
    height: 100%;
    li {
      height: 100%;
      display: flex;
      justify-content: center;
      padding: 0 1rem;
      border-bottom: 4px solid transparent;
    }
    .active {
      border-color: white;
    }
    a {
      color: ${({ theme }) => theme.colors.txtPrimary};
      font-weight: bold;
      padding-top: 4rem;
      font-size: 18px;
      transition: all 0.2s ease-in;
      &:hover {
        font-size: 1.2rem;
      }
    }
  }
  &:last-child {
    width: 100px;
  }
  .mobile {
    display: none;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 2fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 2fr;
    img {
      padding: 10px !important;
    }
    a {
      font-size: 14px !important;
    }
  }
  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .mobile {
      display: unset;
    }
    .menu {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      margin-right: 1rem;
      width: 80%;
      position: relative;

      z-index: 1;

      -webkit-user-select: none;
      user-select: none;

      input {
        width: 40px;
        height: 32px;

        cursor: pointer;

        opacity: 0; /* hide this */
        z-index: 2; /* and place it over the hamburger */

        -webkit-touch-callout: none;
      }

      .hamburger {
        display: block;
        position: absolute;
      }

      span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;

        background: #cdcdcd;
        border-radius: 3px;

        z-index: 1;

        transform-origin: 4px 0px;

        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
          background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

        &:first-child {
          transform-origin: 0% 0%;
        }
        &:nth-last-child(2) {
          transform-origin: 0% 100%;
        }
      }

      input:checked ~ .hamburger {
        span {
          opacity: 1;
          transform: rotate(-45deg) translate(-2px, -1px);
          background: #055556;
        }
        span:nth-last-child(2) {
          opacity: 0;
          transform: rotate(0deg) scale(0.2, 0.2);
        }
        span:nth-last-child(3) {
          transform: rotate(45deg) translate(0, -1px);
        }
      }
    }

    ul {
      display: unset;
      position: absolute;
      width: 120px;
      padding: 50px;
      padding-top: 4rem;
      height: unset;
      overflow: hidden;
      background: #ededed;
      list-style-type: none;
      -webkit-font-smoothing: antialiased;
      /* to stop flickering of text in safari */
      right: -20px;
      top: -21px;

      transform: translate(100%, 0);

      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

      li {
        padding: 1rem 0;
        font-size: 22px;
        border: 0;
        margin: 0;
        justify-content: flex-end;
        height: unset;
        a {
          text-align: right;
          color: #055556;
          padding-top: 0;
        }
      }
    }
    input:checked ~ ul {
      transform: none;
    }
  }
`

const Header: React.FC = () => {
  const { asPath } = useRouter()
  return (
    <Container>
      <Image src="/assets/logo.svg" alt="R4 Câmbio" width={152} height={70} />

      <div className="menu">
        <input type="checkbox" className="mobile" />
        <div className="hamburger mobile">
          <span />
          <span />
          <span />
        </div>
        <ul>
          <li className={asPath === '/' ? 'active' : undefined}>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/you" as="para-voce">
              Para Você
            </Link>
          </li>
          <li className={asPath === '/enterprise' ? 'active' : undefined}>
            <Link href="/enterprise">Para sua Empresa</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contato</Link>
          </li>
        </ul>
      </div>

      <div />
    </Container>
  )
}

export default Header
