import React from 'react'
import styled from 'styled-components'

type Props = {
  id: string
  checked: boolean
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: React.FC<Props> = ({
  children,
  id,
  checked,
  handleCheckboxChange,
}) => (
  <Label htmlFor={id}>
    <HiddenCheckbox id={id} checked={checked} onChange={handleCheckboxChange} />
    <StyledCheckbox checked={checked}>
      <Icon />
    </StyledCheckbox>
    {children}
  </Label>
)

const Icon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="8"
    viewBox="0 0 12 8"
  >
    <g>
      <g>
        <path
          fill="#2196f3"
          d="M4.286 8L0 4.161 1.209 3.08l3.077 2.748L10.79 0 12 1.09z"
        />
      </g>
    </g>
  </svg>
)

const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  cursor: pointer;

  &:hover {
    background: #f1fcff;
  }

  &:focus-within {
    background: #f1fcff;
    outline: 0;
  }
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 20px;
  width: 20px;
  height: 20px;
  border: 1px solid #9abbce;
  border-radius: 2px;
  transition: all 150ms;

  & svg {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`
