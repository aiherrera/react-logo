import React, { FC } from 'react'

import { LogoProps } from './Logo.types'
import { Container } from './Logo.scss'

export const Logo: FC<LogoProps> = ({ logoSVG, width, height, className }) => {
  return (
    <Container
      data-testid='Logo'
      className={className}
      width={width}
      height={height}
    >
      <img src={logoSVG} alt='Logo' />
    </Container>
  )
}
