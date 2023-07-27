import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Input } from '.'

describe('Input', () => {
  it('should render correctly', () => {
    const testIdValue = 'example-input'
    render(<Input data-testid={testIdValue} label="Example" />)
    const component = within(screen.getByTestId(testIdValue))

    expect(component).toBeDefined()
  })
})
