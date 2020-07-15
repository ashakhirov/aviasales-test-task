import React from 'react'
import styled, { keyframes } from 'styled-components'

export const Skeleton: React.FC = () => (
  <Box>
    <Wrapper>
      <LinePlaceholder width="80" height="13px" mb="10px" />
      <LinePlaceholder width="40%" height="9px" />
    </Wrapper>
    <Wrapper>
      <Segment>
        <LinePlaceholder width="100%" height="11px" mb="5px" />
        <LinePlaceholder width="75%" height="9px" />
      </Segment>
      <Segment>
        <LinePlaceholder width="100%" height="11px" mb="5px" />
        <LinePlaceholder width="75%" height="9px" />
      </Segment>
    </Wrapper>
  </Box>
)

const Box = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: #ffffff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Segment = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

const loading = keyframes`
  100% {
      transform: translateX(100%);
    }
`

type PlaceholderProps = {
  width: string
  height: string
  mt?: string
  mr?: string
  mb?: string
  ml?: string
}

const LinePlaceholder = styled.div<PlaceholderProps>`
  position: relative;
  margin-bottom: ${({ mb }) => mb && mb};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  overflow: hidden;
  background-color: #e2e2e2;

  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);

    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );

    animation: ${loading} 0.6s infinite;
  }
`
