import {
  createStore,
  createEvent,
  createEffect,
  sample,
  guard,
  forward,
  merge,
} from 'effector-logger'

import { Ticket, SearchId } from './types'
import { getTickets, getSearchId } from './api'
import { transformTickets } from './lib/transformer'

const ticketsUpdated = createEvent<Ticket[]>()
const handleTransformTickets = ticketsUpdated.prepend(transformTickets)

export const loadSearchIdFx = createEffect({ handler: getSearchId })

const loadTicketsFx = createEffect({ handler: getTickets })

const $searchId = createStore<SearchId>('')
export const $tickets = createStore<Ticket[]>([])
export const $isLoading = createStore(true)
export const $isFirstChunkLoaded = createStore(false)

const loadingStopped = guard(loadTicketsFx.doneData, {
  filter: ({ stop }) => stop === true,
})

const loadMore = guard(loadTicketsFx.doneData, {
  filter: ({ stop }) => stop === false,
})

$searchId.on(loadSearchIdFx.doneData, (_, { searchId }) => searchId)
$tickets.on(ticketsUpdated, (state, tickets) => [...state, ...tickets])
$isLoading.on(loadingStopped, () => false)
$isFirstChunkLoaded.on($tickets, (_, tickets) => tickets.length > 0)

/**
 * transform ticket chunks after they're received
 */
sample({
  source: loadTicketsFx.doneData,
  fn: ({ tickets }) => tickets,
  target: handleTransformTickets,
})

/**
 * if `stop` flag is "false" or request is failed
 * then load next chunk with tickets
 */
sample({
  source: $searchId,
  clock: merge([loadMore, loadTicketsFx.fail]),
  target: loadTicketsFx,
})

/**
 * load ticket chunks after "searchId" param received
 */
forward({
  from: $searchId,
  to: loadTicketsFx,
})
