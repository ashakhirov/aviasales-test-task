import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

import { Skeleton } from 'ui'
import { TicketCard } from './ticket-card'
import { selectIsTicketsFetching, selectTicketsEntities } from '../slice'

export const TicketList: React.FC = () => {
  const isLoading = useSelector(selectIsTicketsFetching)
  const tickets = useSelector(selectTicketsEntities)

  return (
    <TicketListTemplate>
      {isLoading
        ? Array.from({ length: 5 }, (_, idx) => ({ id: idx })).map((_, idx) => (
            <Skeleton key={idx} />
          ))
        : tickets
            .slice(0, 5)
            .map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)}
    </TicketListTemplate>
  )
}

const TicketListTemplate = styled.ul`
  grid-column: 2 / 3;
  margin: 0;
  padding: 0;
  list-style: none;
`
