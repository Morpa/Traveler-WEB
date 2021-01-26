import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${theme.colors.primary};
  `}

  ${media.lessThan('medium')`
    justify-content: center;
  `}
`
