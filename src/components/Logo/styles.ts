import styled, { css } from 'styled-components'

import { LogoProps } from '.'

const wrapperModifiers = {
  small: () => css`
    width: 11rem;
    height: 3.3rem;
  `,

  normal: () => css`
    width: 20rem;
    height: 5.9rem;
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ size }) => css`
    ${!!size && wrapperModifiers[size]};
  `}
`
