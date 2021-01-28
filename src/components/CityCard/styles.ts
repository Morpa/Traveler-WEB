import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 25.2rem;
    border: 2px solid ${theme.colors.blueLow};
    border-radius: 1rem;
    text-decoration: none;
    cursor: pointer;
  `}
`

export const ImageWrapper = styled.div`
  overflow: hidden;
  width: 25rem;
  height: 16rem;
  background: #f6f7f8;
  border-radius: 0.9rem 0.9rem 0 0;
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
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }

    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};

    h2 {
      color: ${theme.colors.titleColor};
      margin-bottom: ${theme.spacings.xsmall};
    }

    span {
      font-family: 'Roboto', sans-serif;
      color: ${theme.colors.textColor};
    }
  `}
`
