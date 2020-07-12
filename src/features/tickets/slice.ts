import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { all, call, take, put, fork, retry } from 'redux-saga/effects'

import { RootState } from 'app/root-reducer'
import { getSearchId, getTickets } from './api'
import { Ticket, TicketsState } from './types'

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
    fetchTicketsSuccess(state, action: PayloadAction<Ticket[]>) {
      state.isLoading = false
      state.entities = action.payload
      state.error = false
    },
    fetchTicketsFailure(state) {
      state.isLoading = false
      state.error = true
    },
  },
})

// Actions
export const {
  fetchTicketsStart,
  fetchTicketsSuccess,
  fetchTicketsFailure,
} = ticketsSlice.actions

// Selectors
export const selectTickets = (state: RootState): TicketsState => state.tickets

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
 * @param searchId param for request
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

export const ticketsReducer = ticketsSlice.reducer
