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
`

const Header = () => {
  const { asPath } = useRouter()
  return (
    <Container>
      <Image src="/assets/logo.svg" alt="R4 Câmbio" width={152} height={70} />
      <ul>
        <li className={asPath === '/' ? 'active' : undefined}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/articles">
            <a>Para Você</a>
          </Link>
        </li>
        <li>
          <Link href="/calculators/retirement">
            <a>Para sua Empresa</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contato</a>
          </Link>
        </li>
      </ul>
      <div />
    </Container>
  )
}

export default Header
