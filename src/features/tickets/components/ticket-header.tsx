import React from 'react'
import styled from 'styled-components'

type Props = {
  price: string
  logo: string
  carrier: string
}

export const TicketHeader: React.FC<Props> = ({ price, logo, carrier }) => {
  return (
    <Wrapper>
      <Price>{price} Р</Price>
      <LogoContainer>
        <Logo src={logo} alt={carrier} />
      </LogoContainer>
    </Wrapper>
  )
}

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
