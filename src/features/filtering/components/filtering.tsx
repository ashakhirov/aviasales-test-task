import React from 'react'
import styled from 'styled-components'

import { StopsFilter } from './stops-filter'

export const Filtering: React.FC = () => {
  return (
    <Template>
      <Title>Количество пересадок</Title>
      <StopsFilter />
    </Template>
  )
}

const Template = styled.aside`
  grid-column: 1 / 2;
  grid-row: span 2;
  height: 252px;
  background-color: #fff;

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 1 / 2;
  }
`

const Title = styled.span`
  display: block;
  margin-top: 20px;
  margin-left: 20px;
  line-height: 1;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`
