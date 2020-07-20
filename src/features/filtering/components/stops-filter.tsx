import React from 'react'
import { useStore } from 'effector-react'
import styled from 'styled-components'

import { Checkbox } from 'ui'
import { $filters, filterSwitched } from '../model'

export const StopsFilter = () => {
  const filters = useStore($filters)

  const onChange = React.useCallback((id: string) => filterSwitched(id), [])

  return (
    <Container>
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
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`
