import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 3rem;
  max-width: 60rem;
`
export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    img {
      margin-top: -1rem;
      margin-right: ${theme.spacings.small};
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
      object-fit: cover;
    }
  `}
`
export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    h3 {
      color: ${theme.colors.textColor};
      margin-right: 10rem;
    }
  `}
`

export const Header = styled.div`
  display: flex;
  align-items: center;
`
export const Review = styled.p`
  ${({ theme }) => css`
    padding: 1rem 0;
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.textColor};
    line-height: ${theme.spacings.small};
  `}
`
