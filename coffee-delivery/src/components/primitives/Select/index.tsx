import { Minus, Plus } from '@phosphor-icons/react'
import {
  SelectContainer,
  SelectDecreaseButton,
  SelectIncreaseButton,
} from './select.style'

interface SelectAmountProps {
  onChange: (value: number) => void
  value: number
}

export const SelectAmount = ({ onChange, value }: SelectAmountProps) => {
  const handleIncreaseAmount = (amount: number) => {
    const increasedValue = value + amount
    onChange(increasedValue)
  }
  const handleDecreaseAmount = (amount: number) => {
    const increasedValue = value - amount

    if (increasedValue > 0) {
      onChange(increasedValue)
    }
  }

  return (
    <SelectContainer>
      <SelectDecreaseButton
        type="button"
        onClick={() => handleDecreaseAmount(1)}
      >
        <Minus size={14} weight="bold" />
      </SelectDecreaseButton>
      {value}
      <SelectIncreaseButton
        type="button"
        onClick={() => handleIncreaseAmount(1)}
      >
        <Plus size={14} weight="bold" />
      </SelectIncreaseButton>
    </SelectContainer>
  )
}
