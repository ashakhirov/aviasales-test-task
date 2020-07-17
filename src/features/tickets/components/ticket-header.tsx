import React from 'react'
import styled from 'styled-components'

import { Ticket } from '../types'
import { DEFAULT_PRICE_LOCALE } from 'consts'

type OmitProps = 'id' | 'segments' | 'duration' | 'stopCounts'

type Props = Omit<Ticket, OmitProps>

export const TicketHeader: React.FC<Props> = React.memo(
  ({ price, logo, carrier }) => {
    return (
      <Wrapper>
        <Price>{price.toLocaleString(DEFAULT_PRICE_LOCALE)} Р</Price>
        <LogoContainer>
          <Logo src={logo} alt={carrier} />
        </LogoContainer>
      </Wrapper>
    )
  },
)

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

const Price = styled.b`
  flex-basis: calc(100% * 2 / 3);
  font-size: 24px;
  line-height: 1;
  color: #2196f3;
`

const LogoContainer = styled.div`
  flex-basis: calc(100% * 1 / 3);
  height: 36px;
`

const Logo = styled.img`
  height: auto;
`
