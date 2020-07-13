import { combineReducers } from '@reduxjs/toolkit'

import { ticketsReducer } from 'features/tickets'
import { sortingReducer } from 'features/sorting'

export const rootReducer = combineReducers({
  tickets: ticketsReducer,
  sorting: sortingReducer,
})

export type RootState = ReturnType<typeof rootReducer>
