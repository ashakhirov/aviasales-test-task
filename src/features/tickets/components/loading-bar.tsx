import React from 'react'
import { useSelector } from 'react-redux'
import { useNProgress } from '@tanem/react-nprogress'

import { Progress } from 'ui'
import { selectIsTicketsPolling } from '../slice'

export const LoadingBar: React.FC = () => {
  const isAnimating = useSelector(selectIsTicketsPolling)
  const { animationDuration, progress, isFinished } = useNProgress({
    isAnimating,
  })

  return (
    <Progress
      animationDuration={animationDuration}
      progress={progress}
      isFinished={isFinished}
    />
  )
}
