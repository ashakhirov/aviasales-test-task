import { all, fork } from 'redux-saga/effects'

import { ticketsSaga } from 'features/tickets'

export function* rootSaga() {
  yield all([fork(ticketsSaga)])
}
