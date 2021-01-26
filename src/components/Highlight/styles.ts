import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 16rem;
    height: 27rem;
    background: ${theme.colors.primary};
    border: solid 1px ${theme.colors.secondary};
    border-radius: 2rem;
  `}
`
export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    height: 10rem;

    margin-right: ${theme.spacings.xxsmall};
    padding: ${theme.spacings.medium};

    & > svg {
      width: 5.2rem;
      color: ${theme.colors.orange};
    }
  `}
`
export const Info = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium};
    border-top: solid 1px ${theme.colors.secondary};

    > h1 {
      color: ${theme.colors.titleColor};
      font-size: 4rem;
      font-weight: ${theme.font.bold};
      margin-bottom: 1rem;
    }

    > span {
      color: ${theme.colors.textColor};
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.light};
      line-height: 2.2rem;
    }
  `}
`
