import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary};
    background-color: ${theme.colors.orange};
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.small};
    height: 8.3rem;
    width: 5.6rem;
    top: -2rem;
    left: 3rem;
    border-radius: 1rem;

    > svg {
      width: 2.2rem;
      margin-bottom: ${theme.spacings.xxsmall};
    }

    > span {
      font-weight: ${theme.font.bold};
    }
  `}
`
