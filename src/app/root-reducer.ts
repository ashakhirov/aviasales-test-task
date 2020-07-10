import { combineReducers } from '@reduxjs/toolkit'

import { ticketsReducer } from 'features/tickets'

export const rootReducer = combineReducers({
  tickets: ticketsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
