import React from 'react'
import styled from 'styled-components'
import { useStore } from 'effector-react'

import { Radio } from '~/ui'
import { $currencies, currencySwitched } from '../model'

export const Currency: React.FC = () => {
  const currencyFilters = useStore($currencies)

  return (
    <Container>
      <Title>Валюта</Title>
      <RadioGroup>
        {currencyFilters.map(({ id, value, label, checked }) => (
          <Radio
            key={id}
            name="currency"
            id={id}
            label={label}
            value={value}
            checked={checked}
            onChange={currencySwitched}
          />
        ))}
      </RadioGroup>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  margin-top: 10px;
`
const Title = styled.span`
  display: block;
  margin-top: 20px;
  margin-left: 20px;
  line-height: 1;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`

const RadioGroup = styled.div`
  display: flex;
  margin: 0 20px;
  margin-top: 10px;
`
