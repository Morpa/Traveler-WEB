import styled, { css } from 'styled-components'

import * as NavbarStyles from 'components/Navbar/styles'

export const NavWrapper = styled.nav`
  ${({ theme }) => css`
    ${NavbarStyles.Wrapper} {
      padding: ${theme.spacings.xsmall};
      justify-content: space-between;
    }
  `}
`
