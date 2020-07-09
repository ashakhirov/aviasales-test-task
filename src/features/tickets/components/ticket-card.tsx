import React from 'react'
import styled from 'styled-components'

import { TicketHeader } from './ticket-header'
import { TicketSegment } from './ticket-segment'

type Props = {
  ticket: any
}

export const TicketCard: React.FC<Props> = ({ ticket }) => {
  return (
    <TicketCardTemplate>
      <TicketHeader
        price="13 400"
        logo="//pics.avs.io/99/36/TG.png"
        carrier="Логотип авиакомпании"
      />
      <TicketBody>
        <TicketSegment />
        <TicketSegment />
      </TicketBody>
    </TicketCardTemplate>
  )
}

const TicketCardTemplate = styled.li`
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: #ffffff;
`

const TicketBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`
