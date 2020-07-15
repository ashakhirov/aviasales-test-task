import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled, { css } from 'styled-components'
import { nanoid } from 'nanoid'

import { toggleSorting, selectSortingValue, SortingValue } from '../slice'

type TabProps = {
  title: string
  value: SortingValue
  active: boolean
}

type ItemProps = {
  active: boolean
}

const tabs: { id: string; title: string; value: SortingValue }[] = [
  {
    id: nanoid(),
    title: 'Самый дешевый',
    value: 'price',
  },
  {
    id: nanoid(),
    title: 'Самый быстрый',
    value: 'duration',
  },
]

export const Sorting: React.FC = () => {
  const activeTab = useSelector(selectSortingValue)

  return (
    <Tabs>
      {tabs.map(({ id, value, title }) => (
        <Tab
          key={id}
          active={activeTab === value}
          value={value}
          title={title}
        />
      ))}
    </Tabs>
  )
}

export const Tab: React.FC<TabProps> = ({ title, active, value }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(toggleSorting(value))
  }

  return (
    <Item active={active} onClick={handleClick}>
      <span>{title}</span>
    </Item>
  )
}

const Tabs = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 2 / 3;
  grid-row: span 1;
  margin: 0;
  padding: 0;
  list-style: none;
`

const Item = styled.li.attrs<ItemProps>(({ active }) => ({
  active,
  tabIndex: '0',
}))<ItemProps>`
  display: block;
  border: 1px solid #dfe5ec;
  padding: 14px 0;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;
  color: #4a4a4a;
  background-color: var(--white);
  cursor: pointer;
  outline: none;

  &:first-child {
    border-radius: var(--button-border-radius) 0 0 var(--button-border-radius);
  }

  &:last-child {
    border-radius: 0 var(--button-border-radius) var(--button-border-radius) 0;
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.3);
  }

  ${({ active }) =>
    active &&
    css`
      color: var(--white);
      background-color: var(--blue);
      border-color: var(--blue);
    `}
`
