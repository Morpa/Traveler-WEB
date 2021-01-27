import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;

    border-bottom: 1px solid ${theme.colors.secondary};
    padding: ${theme.spacings.xsmall} 0;

    > h1 {
      color: ${theme.colors.titleColor};
    }

    > a {
      margin-left: 16rem;
      text-decoration: none;
      color: ${theme.colors.textComplementary};
      font-family: 'Heebo', sans-serif;
    }
  `}
`
export const Map = styled.div`
  ${({ theme }) => css`
    height: 16rem;
    width: 45rem;
    margin-top: ${theme.spacings.medium};
  `}
`
export const Address = styled.p`
  ${({ theme }) => css`
    font-family: 'Heebo', sans-serif;
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xsmall};
    color: ${theme.colors.textColor};
  `}
`
