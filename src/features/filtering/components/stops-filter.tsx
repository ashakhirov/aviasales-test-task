import React from 'react'
import { useStore } from 'effector-react'
import styled from 'styled-components'

import { Checkbox } from '~/ui'
import { $stops, stopsSwitched } from '../model'

export const StopsFilter = () => {
  const filters = useStore($stops)

  const onChange = React.useCallback((id: string) => stopsSwitched(id), [])

  return (
    <Container>
      <Title>Количество пересадок</Title>
      {filters.map(({ id, checked, label }) => (
        <Checkbox
          key={id}
          id={id}
          label={label}
          checked={checked}
          handleCheckboxChange={onChange}
        />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`

const Title = styled.span`
  display: block;
  margin-top: 20px;
  margin-left: 20px;
  line-height: 1;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`
