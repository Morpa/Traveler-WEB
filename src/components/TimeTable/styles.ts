import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    width: 10rem;
    height: 8.4rem;
    background: ${theme.colors.primary};
    border-radius: 0.8rem;
    border: 1px solid ${theme.colors.blueLow};

    h3 {
      margin-top: ${theme.spacings.xxsmall};
      color: ${theme.colors.titleColor};
    }

    h4 {
      font-weight: ${theme.font.light};
      color: ${theme.colors.textColor};
    }
  `}
`
