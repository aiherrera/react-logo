import React from 'react'
import { render } from '@testing-library/react'

import { Logo } from './Logo'
import { LogoProps } from './Logo.types'

describe('Test Component', () => {
  let props: LogoProps

  beforeEach(() => {
    props = {
      logoSVG: './LogoSVG.svg'
    }
  })

  const renderComponent = () => render(<Logo {...props} />)

  it('should render Logo in the DOM', () => {
    const { getByTestId } = renderComponent()

    const component = getByTestId('Logo')

    expect(component).toBeInTheDocument()
    expect(component).toBeVisible()
  })

  it('Logo should be visible in the DOM', () => {
    const { getByTestId } = renderComponent()

    const component = getByTestId('Logo')

    expect(component).toBeVisible()
  })
})
