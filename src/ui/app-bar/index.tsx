import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Logo } from '~/logo.svg'

export const AppBar: React.FC = () => (
  <Header>
    <Link href="/">
      <Logo />
    </Link>
  </Header>
)

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
`

const Link = styled.a`
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.3);
  }
`
