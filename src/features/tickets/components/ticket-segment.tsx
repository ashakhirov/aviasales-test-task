import React from 'react'
import styled from 'styled-components'

import { formatDuration, formatTimeInterval } from 'lib/date'
import { Segment } from '../types'

type Props = {
  segment: Segment
}

export const TicketSegment: React.FC<Props> = React.memo(({ segment }) => {
  const route = `${segment.origin} – ${segment.destination}`
  const timeInterval = formatTimeInterval(
    segment.date,
    segment.duration,
    'Europe/Moscow',
  )

  return (
    <Container>
      <Wrapper>
        <Title>{route}</Title>
        <Description>{timeInterval}</Description>
      </Wrapper>
      <Wrapper>
        <Title>В Пути</Title>
        <Description>{formatDuration(segment.duration)}</Description>
      </Wrapper>
      <Wrapper>
        <Title>Без Пересадок</Title>
        <Description>Прямой</Description>
      </Wrapper>
    </Container>
  )
})

const Container = styled.div`
  display: flex;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);

  &:not(:last-child) {
    padding-right: 20px;
  }
`

const Title = styled.span`
  line-height: 1.5;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #a0b0b9;
`

const Description = styled.span`
  font-size: 14px;
  line-height: 1.5;
  color: #4a4a4a;
`
