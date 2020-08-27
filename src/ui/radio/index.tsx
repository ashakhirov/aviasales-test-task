import React from 'react'
import { Event } from 'effector'
import styled from 'styled-components'

type Props = {
  id?: string
  label: string
  name?: string
  value: string
  checked: boolean
  onChange: Event<React.ChangeEvent<HTMLInputElement>>
}

export const Radio: React.FC<Props> = ({
  id,
  label,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <Wrapper>
      <Input
        id={id}
        name={name}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  &:first-child label {
    border-right: none;
    border-radius: 5px 0 0 5px;
  }

  &:last-child label {
    border-left: none;
    border-radius: 0 5px 5px 0;
  }
`

const Input = styled.input.attrs<Props>((props) => ({
  type: 'radio',
}))`
  position: absolute !important;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0 !important;
  border: 0 !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden;

  &:checked + label {
    color: var(--white);
    background: var(--blue);
    border-color: var(--blue);
  }
`

const Label = styled.label`
  display: block;
  padding: 12px 40px;
  border: 1px solid #d2d5d6;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  color: #2196f3;
  transition: 0.1s linear;
  cursor: pointer;

  &:hover {
    background: #f2fcff;
    border-color: var(--blue);
  }
`
