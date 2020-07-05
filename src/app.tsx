import React from 'react'
import { hot } from 'react-hot-loader/root'

import { Layout, AppBar } from 'ui'
import { GlobalStyles } from './globals'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <AppBar />
      </Layout>
    </>
  )
}

export default hot(App)
