import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { rootReducer } from './root-reducer'
import { rootSaga } from './root-saga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, ...getDefaultMiddleware()]

export const store = configureStore({
  reducer: rootReducer,
  middleware,
})

sagaMiddleware.run(rootSaga)

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./root-reducer', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const newRootReducer = require('./root-reducer').default
    store.replaceReducer(newRootReducer)
  })
}
