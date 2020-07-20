import { createStore, createEvent } from 'effector-logger'

import { WITHOUT_STOPS, STOPS } from 'consts'
import { createNounDeclension } from 'lib/string'
import { Ticket } from 'features/tickets'

export type Filter = {
  id: string
  label: string
  checked: boolean
}

export const filtersUpdated = createEvent<Ticket[]>()
export const filterSwitched = createEvent<string>()

export const $filters = createStore<Filter[]>([
  {
    id: '-1',
    label: 'Все',
    checked: true,
  },
])

export const $activatedStops = $filters.map((state) =>
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

$filters
  .on(filtersUpdated, (state, tickets) => {
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
  .on(filterSwitched, (state, filterId) => {
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
