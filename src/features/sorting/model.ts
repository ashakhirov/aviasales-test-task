import React from 'react'
import { createStore, createEvent } from 'effector'

export type SortingId = 'price' | 'duration'

export type SortingTab = {
  id: SortingId
  title: string
  active: boolean
}

const sortingToggled = createEvent<SortingId>()

export const handleSortingToggled = sortingToggled.prepend<
  React.MouseEvent<HTMLButtonElement>
>((event) => event.currentTarget.id as SortingId)

export const $sortingTabs = createStore<SortingTab[]>([
  {
    id: 'price',
    title: 'Самый дешевый',
    active: true,
  },
  {
    id: 'duration',
    title: 'Самый быстрый',
    active: false,
  },
])

export const $activeSortingId = $sortingTabs.map<SortingId>((tabs) =>
  tabs.reduce((id, nextTab) => (nextTab.active ? nextTab.id : id), tabs[0].id),
)

$sortingTabs.on(sortingToggled, (state, id) =>
  state.map((item) => ({ ...item, active: item.id === id })),
)
