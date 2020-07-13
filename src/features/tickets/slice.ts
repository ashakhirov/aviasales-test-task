import { PayloadAction, createSlice, createSelector } from '@reduxjs/toolkit'
import { all, call, take, put, fork, retry } from 'redux-saga/effects'

import { RootState } from 'app/root-reducer'
import { getSearchId, getTickets } from './api'
import { Ticket, TicketsState } from './types'
import { transformTicket } from './lib/transformer'

const initialState: TicketsState = {
  entities: [],
  isLoading: false,
  error: false,
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    fetchTicketsStart(state) {
      state.isLoading = true
      state.entities = []
      state.error = false
    },
    fetchTicketsSuccess: {
      reducer(state, action: PayloadAction<Ticket[]>) {
        state.isLoading = false
        state.entities = action.payload
        state.error = false
      },
      prepare(tickets) {
        const transformedTickets = tickets.map(transformTicket)
        return { payload: transformedTickets }
      },
    },
    fetchTicketsFailure(state) {
      state.isLoading = false
      state.error = true
    },
  },
})

export const ticketsReducer = ticketsSlice.reducer

// Actions
export const {
  fetchTicketsStart,
  fetchTicketsSuccess,
  fetchTicketsFailure,
} = ticketsSlice.actions

// Selectors
const selectTickets = (state: RootState): TicketsState => state.tickets

export const selectIsTicketsFetching = createSelector(
  [selectTickets],
  (tickets) => tickets.isLoading,
)

export const selectTicketsEntities = createSelector(
  [selectTickets],
  (tickets) => tickets.entities,
)

// Sagas
function* fetchTickets() {
  const { searchId } = yield call(getSearchId)

  try {
    const { tickets } = yield call(getTickets, searchId)

    yield put(fetchTicketsSuccess(tickets))
  } catch {
    yield retryFetchTickets(searchId)
  }
}

/**
 * retry to fetch tickets if the request fails with error
 * @param {string} searchId param for request
 */
function* retryFetchTickets(searchId: string) {
  try {
    const { tickets } = yield retry(5, 100, getTickets, searchId)
    yield put(fetchTicketsSuccess(tickets))
  } catch {
    yield put(fetchTicketsFailure())
  }
}

function* watchFetchTickets() {
  while (true) {
    yield take(fetchTicketsStart)
    yield call(fetchTickets)
  }
}

export function* ticketsSaga() {
  yield all([fork(watchFetchTickets)])
}
