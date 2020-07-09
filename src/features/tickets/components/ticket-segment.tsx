import React from 'react'
import styled from 'styled-components'

export const TicketSegment: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>MOW – HKT</Title>
        <Description>11:20 – 00:50</Description>
      </Wrapper>
      <Wrapper>
        <Title>В Пути</Title>
        <Description>11:20 – 00:50</Description>
      </Wrapper>
      <Wrapper>
        <Title>Без Пересадок</Title>
        <Description>Прямой</Description>
      </Wrapper>
    </Container>
  )
}

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
