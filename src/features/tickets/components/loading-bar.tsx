import React from 'react'
import { useStore } from 'effector-react'
import { useNProgress } from '@tanem/react-nprogress'

import { Progress } from 'ui'
import { $isLoading } from '../model'

export const LoadingBar: React.FC = () => {
  const isLoading = useStore($isLoading)
  const { animationDuration, progress, isFinished } = useNProgress({
    isAnimating: isLoading,
  })

  return (
    <Progress
      animationDuration={animationDuration}
      progress={progress}
      isFinished={isFinished}
    />
  )
}
