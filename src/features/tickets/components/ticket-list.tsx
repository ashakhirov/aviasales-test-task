import React from 'react'
import styled from 'styled-components'

import { TicketCard } from './ticket-card'

export const TicketList: React.FC = () => {
  return (
    <TicketListTemplate>
      {Array.from(
        [
          {
            price: '15 000',
            logo: '//pics.avs.io/99/36/TG.png',
            carrier: 'Логотип авиакомпании',
          },
          {
            price: '15 000',
            logo: '//pics.avs.io/99/36/TG.png',
            carrier: 'Логотип авиакомпании',
          },
          {
            price: '15 000',
            logo: '//pics.avs.io/99/36/TG.png',
            carrier: 'Логотип авиакомпании',
          },
          {
            price: '15 000',
            logo: '//pics.avs.io/99/36/TG.png',
            carrier: 'Логотип авиакомпании',
          },
          {
            price: '15 000',
            logo: '//pics.avs.io/99/36/TG.png',
            carrier: 'Логотип авиакомпании',
          },
        ],
        (ticket, idx) => (
          <TicketCard key={idx} ticket={ticket} />
        ),
      )}
    </TicketListTemplate>
  )
}

const TicketListTemplate = styled.ul`
  grid-column: 2 / 3;
  margin: 0;
  padding: 0;
  list-style: none;
`
