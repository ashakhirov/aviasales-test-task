import React from 'react'
import { createStore, createEvent, createEffect } from 'effector'
import { nanoid } from 'nanoid'

import { WITHOUT_STOPS, STOPS } from '~/consts'
import { createNounDeclension } from '~/lib/string'
import { Ticket } from '~/features/tickets'
import { getCurrencyRates } from './api'
import { Stop, Currency } from './types'

export const stopsUpdated = createEvent<Ticket[]>()

export const stopsSwitched = createEvent<string>()

export const currencySwitched = createEvent<
  React.ChangeEvent<HTMLInputElement>
>()

export const currencyUpdated = currencySwitched.map(
  (event) => event.target.value,
)

export const loadCurrencyRatesFx = createEffect({ handler: getCurrencyRates })

export const $stops = createStore<Stop[]>([
  {
    id: '-1',
    label: 'Все',
    checked: true,
  },
])
  .on(stopsUpdated, (state, tickets) => {
    return tickets.reduce(
      (acc, ticket) => {
        const stopCounts = ticket.segments.reduce<number[]>(
          (count, { stops }) => [...count, stops.length],
          [],
        )

        const filterExists = stopCounts.every((stops) =>
          acc.find((filter) => filter?.id === stops.toString()),
        )

        // if filter already exists don't do anything
        if (filterExists) return acc

        // otherwise add a new filter
        stopCounts.forEach((stop) => {
          if (acc[stop + 1]) return

          acc[stop + 1] = {
            id: stop.toString(),
            label: createNounDeclension(stop, STOPS, WITHOUT_STOPS),
            checked: true,
          }
        })

        return acc
      },
      [...state],
    )
  })
  .on(stopsSwitched, (state, filterId) => {
    const id = Number(filterId) + 1
    const isChecked = state[id].checked

    // if "all stops" filter is switched then switch every filter
    if (id === 0) {
      return state.map((filter) => ({
        ...filter,
        checked: !isChecked,
      }))
    }

    // otherwise switch only one filter
    const newState = [...state]
    newState[id].checked = !isChecked

    // if all filters are checked then switch "all stops" filter
    const isAllFilterChecked = state.slice(1).every((filter) => filter.checked)

    newState[0].checked = isAllFilterChecked

    return newState
  })

export const $activatedStops = $stops.map((state) =>
  state
    .slice(1)
    .reduce<number[]>(
      (stops, filter) =>
        filter === undefined || !filter.checked
          ? stops
          : [...stops, Number(filter.id)],
      [],
    ),
)

export const $currencies = createStore<Currency[]>([
  {
    id: nanoid(),
    label: 'RUB',
    value: 'RUB',
    checked: true,
    rate: 1,
  },
  {
    id: nanoid(),
    label: 'USD',
    value: 'USD',
    checked: false,
    rate: 1,
  },
  {
    id: nanoid(),
    label: 'EUR',
    value: 'EUR',
    checked: false,
    rate: 1,
  },
])
  .on(currencyUpdated, (filters, selectedCurrency) =>
    [...filters].map((filter) => {
      filter.checked = filter.value === selectedCurrency ? true : false
      return filter
    }),
  )
  .on(loadCurrencyRatesFx.doneData, (filters, rates) =>
    filters.map((filter) => {
      const code = filter.value.toLowerCase()
      filter.rate = rates[code] ? rates[code].rate : 1
      return filter
    }),
  )

export const $selectedCurrency = $currencies.map((filters) =>
  filters.find((filter) => filter.checked),
)
