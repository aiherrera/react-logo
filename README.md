# Logo Component for React

A simple & easy to use react Logo.

## Installation

Requires **React 16 or later**

`npm i --save @aiherrera/react-logo`

`# or`

`yarn add @aiherrera/react-logo`

## Demo

You can check all the configurations in [Ai-CoderLab](https://coderlab.aiherrera.com/?path=/story/playground-react-components--logo)

## Usage

`{ Logo }`

```
// ES5 syntax
const Logo = require('@aiherrera/react-logo')

// ES6 syntax
import Logo from '@aiherrera/react-logo'

```

### Full example

```TSX
import React from 'react'

import Logo from '@aiherrera/react-logo'
import logoSVG from './logoSVG.svg'

const App = () => {

  const width = 80
  const height = 80

  return <Logo logoSVG={logoSVG} width={width} height={height}/>

}
```

## Props

All these props are passed as defaults and can be overriden any time.

| Name    | Type   | Unit | Description        | Default |
| ------- | ------ | ---- | ------------------ | ------- |
| logoSVG | string | N/A  | Logo image dir     |         |
| width   | number | N/A  | Width of the logo  | 64      |
| height  | number | N/A  | Height of the logo | 64      |
