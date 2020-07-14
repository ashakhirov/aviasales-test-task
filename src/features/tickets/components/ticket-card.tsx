import React from 'react'
import styled from 'styled-components'

import { TicketHeader } from './ticket-header'
import { TicketSegment } from './ticket-segment'
import { Ticket } from '../types'

type Props = {
  ticket: Ticket
}

export const TicketCard: React.FC<Props> = React.memo(({ ticket }) => {
  return (
    <TicketCardTemplate>
      <TicketHeader
        price={ticket.price}
        logo={ticket.logo}
        carrier={ticket.carrier}
      />
      <TicketBody>
        {ticket.segments.map((segment) => (
          <TicketSegment
            key={segment.date.toLocaleString()}
            segment={segment}
          />
        ))}
      </TicketBody>
    </TicketCardTemplate>
  )
})

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
