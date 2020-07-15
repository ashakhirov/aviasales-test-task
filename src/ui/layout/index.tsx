import React from 'react'
import styled from 'styled-components'

export const Layout: React.FC = ({ children }) => (
  <Scaffold>
    <Container>{children}</Container>
  </Scaffold>
)

const Scaffold = styled.div`
  position: relative;
  width: 100%;
`

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0 10px;
`
