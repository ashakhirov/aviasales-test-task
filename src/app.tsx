import React from 'react'
import { hot } from 'react-hot-loader/root'

import { GlobalStyles } from './globals'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <h1>Test task</h1>
    </>
  )
}

export default hot(App)
