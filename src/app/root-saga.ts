import { AllEffect, all } from 'redux-saga/effects'

export function* rootSaga(): Generator<AllEffect<never>, void, unknown> {
  yield all([])
}
