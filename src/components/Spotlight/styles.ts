import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 29rem;
    background: ${theme.colors.primary};
  `}
`

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: column;
    border: 1px solid ${theme.colors.blueLow};
    border-radius: 1rem 0px 0px 1rem;
    padding: 6rem;
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.green};
    border-radius: 0px 1rem 1rem 0px;
    width: 56rem;
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0px 0.9rem 0.9rem 0px;
    }

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }

      100% {
        background-position: 40rem 0;
      }
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.titleColor};
    font-size: 3.6rem;
  `}
`

export const Description = styled.p`
  ${({ theme }) =>
    css`
      color: ${theme.colors.textColor};
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.xsmall} 0;
      font-weight: ${theme.font.light};
      font-family: 'Heebo', sans-serif;
    `}
`
export const Bullet = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 3rem;
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.small} ${theme.spacings.large};
    background: ${theme.colors.orange};
    color: ${theme.colors.primary};
    border-radius: 10rem;
    margin-bottom: ${theme.spacings.large};
  `}
`
export const Icon = styled.span`
  ${({ theme }) => css`
    width: 100%;
    margin-right: ${theme.spacings.xxsmall};

    & > svg {
      width: 2.2rem;
    }
  `}
`
