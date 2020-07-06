import React from 'react'
import styled from 'styled-components'

export const Main: React.FC = ({ children }) => (
  <MainTemplate>{children}</MainTemplate>
)

const MainTemplate = styled.main`
  display: grid;
  grid-template-columns: 30% minmax(auto, 65%);
  grid-template-rows: auto auto;
  grid-gap: 5%;
`
