import React from 'react'
import { useList } from 'effector-react'
import styled, { css } from 'styled-components'

import { SortingTab, $sortingTabs, handleSortingToggled } from '../model'

export const Sorting: React.FC = () => (
  <Tabs>
    {useList($sortingTabs, ({ id, title, active }) => (
      <Tab key={id} id={id} title={title} active={active} />
    ))}
  </Tabs>
)

const Tab: React.FC<SortingTab> = ({ id, title, active }) => (
  <Item>
    <Button
      id={id}
      type="button"
      active={active}
      onClick={handleSortingToggled}
    >
      {title}
    </Button>
  </Item>
)

type ButtonProps = {
  active: boolean
}

const Button = styled.button.attrs<ButtonProps>(({ active }) => ({
  active,
  type: 'button',
}))<ButtonProps>`
  width: 100%;
  height: 50px;
  border: 1px solid #dfe5ec;
  font: inherit;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;
  background-color: var(--white);
  outline: none;
  cursor: pointer;

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

const Tabs = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 2 / 3;
  grid-row: span 1;
  margin: 0;
  padding: 0;
  list-style: none;
`

const Item = styled.li`
  &:first-child button {
    border-radius: var(--button-border-radius) 0 0 var(--button-border-radius);
  }

  &:last-child button {
    border-radius: 0 var(--button-border-radius) var(--button-border-radius) 0;
  }
`
