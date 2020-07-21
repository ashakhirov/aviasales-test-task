import React from 'react'
import styled from 'styled-components'

export const Main: React.FC = ({ children }) => (
  <MainTemplate>{children}</MainTemplate>
)

const MainTemplate = styled.main`
  display: grid;
  grid-template-columns: 1fr minmax(auto, 2fr);
  grid-template-rows: auto auto;
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }
`
