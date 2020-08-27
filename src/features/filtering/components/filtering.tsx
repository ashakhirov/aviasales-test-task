import React from 'react'
import styled from 'styled-components'

import { StopsFilter } from './stops-filter'
import { Currency } from './currency-filter'

export const Filtering: React.FC = () => {
  return (
    <Template>
      <Currency />
      <StopsFilter />
    </Template>
  )
}

const Template = styled.aside`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  height: 360px;
  background-color: #fff;

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 1 / 2;
  }
`
