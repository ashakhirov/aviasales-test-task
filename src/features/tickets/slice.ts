import { PayloadAction, createSlice, createSelector } from '@reduxjs/toolkit'
import { all, call, take, put, fork, delay, cancel } from 'redux-saga/effects'

import { RootState } from 'app/root-reducer'
import { selectSortingValue } from 'features/sorting'
import { compareNumbers } from 'lib/number'
import { getSearchId, getTickets } from './api'
import { Ticket, TicketsState } from './types'
import { transformTicket } from './lib/transformer'

const initialState: TicketsState = {
  entities: [],
  polling: false,
  isLoading: false,
  error: null,
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    pollingStop(state) {
      state.polling = false
      state.error = null
    },
    fetchTicketsStart(state) {
      state.isLoading = true
      state.polling = true
      state.entities = []
      state.error = null
    },
    fetchTicketsSuccess: {
      reducer(state, action: PayloadAction<Ticket[]>) {
        state.isLoading = false
        state.entities = [...state.entities, ...action.payload]
        state.error = null
      },
      prepare(tickets) {
        const transformedTickets = tickets.map(transformTicket)
        return { payload: transformedTickets }
      },
    },
    fetchTicketsFailure(state, action: PayloadAction<string>) {
      state.entities = [...state.entities]
      state.isLoading = false
      state.polling = false
      state.error = action.payload
    },
  },
})

export const ticketsReducer = ticketsSlice.reducer

// Actions
export const {
  pollingStop,
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

export const selectSortedTickets = createSelector(
  [selectTicketsEntities, selectSortingValue],
  (tickets, value) =>
    [...tickets].sort((current, next) =>
      compareNumbers(current[value], next[value]),
    ),
)

// Sagas
function* fetchSearchId() {
  const { searchId } = yield call(getSearchId)
  return searchId
}

/**
 * fetch tickets from backend
 * retry fetching if we will have server error
 * @param {string} searchId param for fetching tickets
 */
function* fetchTickets(searchId: string) {
  while (true) {
    try {
      const { tickets, stop } = yield call(getTickets, searchId)

      if (!stop) {
        yield put(fetchTicketsSuccess(tickets))
      } else {
        yield put(pollingStop())
      }
    } catch (error) {
      yield put(fetchTicketsFailure(error.message))
      yield delay(1000)
    }
  }
}

/**
 * when polling stops cancel fetcing tickets
 */
function* watchFetchTickets() {
  while (yield take(fetchTicketsStart)) {
    const searchId = yield call(fetchSearchId)
    const task = yield fork(fetchTickets, searchId)
    yield take(pollingStop)
    yield cancel(task)
  }
}

export function* ticketsSaga() {
  yield all([fork(watchFetchTickets)])
}
