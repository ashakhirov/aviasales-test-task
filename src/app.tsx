import React from 'react'
import { hot } from 'react-hot-loader/root'
import styled from 'styled-components'

import { Layout, AppBar, Main } from 'ui'
import { TicketList } from 'features/tickets'
import { GlobalStyles } from './global-styles'

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <AppBar />
        <Main>
          <FilteringMenu>Filters</FilteringMenu>
          <SortingMenu>Tabs</SortingMenu>
          <TicketList />
        </Main>
      </Layout>
    </>
  )
}

const FilteringMenu = styled.aside`
  grid-column: 1 / 2;
  grid-row: span 2;

  /* temporary props */
  height: 252px;
  border: 2px solid black;
`

const SortingMenu = styled.section`
  grid-column: 2 / 3;
  grid-row: span 1;

  /* temporary props */
  height: 50px;
  border: 2px solid black;
`

export default hot(App)
