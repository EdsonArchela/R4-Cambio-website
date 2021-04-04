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
          <Link href="/about">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contato</Link>
        </li>
      </ul>
      <div />
    </Container>
  )
}

export default Header
