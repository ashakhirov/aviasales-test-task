import React from 'react'
import { hot } from 'react-hot-loader/root'

import { Layout, AppBar, Main } from 'ui'
import { Filtering } from 'features/filtering'
import { Sorting } from 'features/sorting'
import { TicketList, LoadingBar } from 'features/tickets'
import { GlobalStyles } from '../global-styles'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        {/* <LoadingBar /> */}
        <AppBar />
        <Main>
          {/* <Filtering /> */}
          {/* <Sorting /> */}
          {/* <TicketList /> */}
        </Main>
      </Layout>
    </>
  )
}

export default hot(App)
