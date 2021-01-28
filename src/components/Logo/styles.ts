import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const wrapperModifiers = {
  small: () => css`
    width: 11rem;
    height: 3.3rem;
  `,

  normal: () => css`
    width: 20rem;
    height: 5.9rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 12rem;
      height: 6rem;

    svg {
      pointer-events: none;
    }

    .text {
      display: none;
    }
`}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ size, hideOnMobile }) => css`
    ${!!size && wrapperModifiers[size]};
    ${!!hideOnMobile && wrapperModifiers.hideOnMobile};
  `}
`
