import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  a {
    text-decoration: none;
  }
`
export const HeadWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.large} ${theme.spacings.xxsmall};

    > h1 {
      color: ${theme.colors.titleColor};
    }
  `}
`

export const OptionsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    width: 25rem;
    border-bottom: 12px color ${theme.colors.orange};

    > a {
      text-decoration: none;
      font-family: 'Roboto', sans-serif;
      font-weight: ${theme.font.bold};
      color: ${theme.colors.orange};
    }
  `}
`
