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
  display: flex;
  justify-content: space-between;
  width: 25rem;

  > span {
    font-family: 'Roboto', sans-serif;
  }
`
