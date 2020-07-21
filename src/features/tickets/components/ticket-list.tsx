import React from 'react'
import { useStore } from 'effector-react'
import styled from 'styled-components'

import { Skeleton } from 'ui'
import { TicketCard } from './ticket-card'
import { $sortingTickets, $isFirstChunkLoaded, $isLoading } from '../model'

export const TicketList: React.FC = () => {
  const isChunkLoaded = useStore($isFirstChunkLoaded)
  const isLoading = useStore($isLoading)
  const tickets = useStore($sortingTickets)

  return (
    <TicketListTemplate>
      {isChunkLoaded
        ? tickets
            .slice(0, 5)
            .map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)
        : [...Array(5)].map((_, idx) => <Skeleton key={idx} />)}
      {tickets.length === 0 && !isLoading && (
        <NothingFound>Ничего не найдено по заданным вами фильтрам</NothingFound>
      )}
    </TicketListTemplate>
  )
}

const TicketListTemplate = styled.ul`
  grid-column: 2 / 3;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 3 / 4;
  }
`

const NothingFound = styled.h2`
  font-size: 18px;
  text-align: center;
`
