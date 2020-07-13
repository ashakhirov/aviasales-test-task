import React from 'react'
import { hot } from 'react-hot-loader/root'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { Layout, AppBar, Main } from 'ui'
import { TicketList, fetchTicketsStart } from 'features/tickets'
import { Sorting } from 'features/sorting'
import { GlobalStyles } from '../global-styles'

const App: React.FC = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchTicketsStart())
  }, [dispatch])

  return (
    <>
      <GlobalStyles />
      <Layout>
        <AppBar />
        <Main>
          <FilteringMenu>Filters</FilteringMenu>
          <Sorting>Tabs</Sorting>
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

export default hot(App)
