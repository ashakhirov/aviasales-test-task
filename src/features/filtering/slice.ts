import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'

import { STOPS, WITHOUT_STOPS } from 'consts'
import { RootState } from 'app/root-reducer'
import { createNounDeclension } from 'lib/string'
import { Ticket } from 'features/tickets'

export type Filter = {
  id: string
  label: string
  checked: boolean
}

type FilteringState = {
  filters: Filter[]
}

const initialState: FilteringState = {
  filters: [
    {
      id: '-1',
      label: 'Все',
      checked: true,
    },
  ],
}

const filteringSlice = createSlice({
  name: 'filtering',
  initialState,
  reducers: {
    updateFilters: (state, action: PayloadAction<Ticket[]>) => {
      state.filters = action.payload.reduce(
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
        [...state.filters],
      )
    },
    switchFilters: (state, action: PayloadAction<string>) => {
      const id = Number(action.payload) + 1
      const isChecked = state.filters[id].checked

      // if "all stops" filter is switched then switch every filter
      if (id === 0) {
        state.filters = state.filters.map((filter) => ({
          ...filter,
          checked: !isChecked,
        }))
      }

      // otherwise switch only one filter
      state.filters[id].checked = !isChecked

      // if all filters are checked then switch "all stops" filter
      const isAllFilterChecked = state.filters
        .slice(1)
        .every((filter) => filter?.checked)

      state.filters[0].checked = isAllFilterChecked
    },
  },
})

export const { updateFilters, switchFilters } = filteringSlice.actions

export const filteringReducer = filteringSlice.reducer

// Selectors
const selectFiltering = (state: RootState) => state.filtering

export const selectFilters = createSelector(
  [selectFiltering],
  (filtering) => filtering.filters,
)

export const selectActivatedStops = createSelector(selectFilters, (filters) =>
  filters
    .slice(1)
    .reduce(
      (stops: number[], filter) =>
        filter === undefined || !filter.checked
          ? stops
          : [...stops, Number(filter.id)],
      [],
    ),
)
