import styled from 'styled-components'

const Container = styled.div(
  ({ width, height }) => `
    > img {
      width: ${width | 64}px;
      height: ${height | 64}px;
    }
  `
)

export { Container }
