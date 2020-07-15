import React from 'react'
import styled from 'styled-components'

type Props = {
  animationDuration: number
  progress: number
  isFinished: boolean
}

export const Progress: React.FC<Props> = ({
  animationDuration,
  progress,
  isFinished,
}) => (
  <Container animationDuration={animationDuration} isFinished={isFinished}>
    <BarWrapper animationDuration={animationDuration} progress={progress}>
      <Bar />
    </BarWrapper>
  </Container>
)

const Container = styled.div<Omit<Props, 'progress'>>`
  opacity: ${({ isFinished }) => (isFinished ? 0 : 1)};
  pointer-events: none;
  transition: ${({ animationDuration }) =>
    `opacity ${animationDuration}ms linear`};
`

const BarWrapper = styled.div<Omit<Props, 'isFinished'>>`
  background: var(--progress);
  height: 5px;
  left: 0;
  margin-left: ${({ progress }) => `${(-1 + progress) * 100}`}%;
  position: fixed;
  top: 0;
  transition: ${({ animationDuration }) =>
    `margin-left ${animationDuration}ms linear`};
  width: 100%;
  z-index: 1031;
`

const Bar = styled.div`
  display: block;
  height: 100%;
  opacity: 1;
  position: absolute;
  right: 0;
  transform: rotate(3deg) translate(0px, -4px);
  width: 100%;
`
