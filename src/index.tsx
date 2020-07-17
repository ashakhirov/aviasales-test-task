import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import { fetchTicketsStart } from 'features/tickets'
import { store } from './app/store'
import App from './app'

store.dispatch(fetchTicketsStart())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
