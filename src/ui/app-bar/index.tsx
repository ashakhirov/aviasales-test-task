import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Logo } from 'src/logo.svg'

export const AppBar: React.FC = () => (
  <Header>
    <a href="/">
      <Logo />
    </a>
  </Header>
)

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
`
