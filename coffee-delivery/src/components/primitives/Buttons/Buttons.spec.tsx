import { ShoppingCartSimple } from '@phosphor-icons/react'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Button } from './Default'
import { IconButton } from './IconButton'

describe('Default button', () => {
  it('should render correctly', () => {
    const htmlText = 'Example'

    render(<Button>{htmlText}</Button>)
    const component = within(screen.getByText(htmlText))

    expect(component).toBeDefined()
  })

  it('should pass basic props and events', () => {
    const htmlText = 'Example 2'
    const simpleMockedFunction = vi.fn()

    render(<Button onClick={simpleMockedFunction}>{htmlText}</Button>)
    const component = screen.getByText(htmlText)

    fireEvent.click(component)
    expect(simpleMockedFunction).toHaveBeenCalled()
  })
})

describe('Icon button', () => {
  it('should render correctly', () => {
    const iconComponent = <ShoppingCartSimple />

    render(<IconButton title="icon-button">{iconComponent}</IconButton>)
    const component = within(screen.getByTitle('icon-button'))

    expect(component).toBeDefined()
  })
})
