import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { Checkbox } from 'ui'
import { selectFilters, switchFilters } from '../slice'

export const StopsFilter = () => {
  const dispatch = useDispatch()
  const filters = useSelector(selectFilters)

  const onChange = React.useCallback(
    (id: string) => dispatch(switchFilters(id)),
    [dispatch],
  )

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
