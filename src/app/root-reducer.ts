import { combineReducers } from '@reduxjs/toolkit'

import { ticketsReducer } from 'features/tickets'
import { sortingReducer } from 'features/sorting'
import { filteringReducer } from 'features/filtering'

export const rootReducer = combineReducers({
  tickets: ticketsReducer,
  sorting: sortingReducer,
  filtering: filteringReducer,
})

export type RootState = ReturnType<typeof rootReducer>
