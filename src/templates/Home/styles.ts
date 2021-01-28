import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'
import * as CityCardStyles from 'components/CityCard/styles'

export const HomeWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    padding: ${theme.spacings.large} 0;

    ${ButtonStyles.Wrapper} {
      font-weight: ${theme.font.bold};
    }
  `}
`

export const ButtonWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
`

export const LeftSide = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  max-width: 33rem;
  height: 90vh;

  > h1 {
    margin-bottom: -7rem;
  }

  > p {
    margin-bottom: -7rem;
  }

  ${ButtonStyles.Wrapper} {
    margin-top: -5rem;
    width: 100%;
  }
`
export const HugeText = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.titleColor};
    font-weight: ${theme.font.bold};
    font-size: 8rem;
    line-height: 7rem;
  `}
`
export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.textColor};
    font-family: 'Heebo', sans-serif;
    font-size: ${theme.font.sizes.xlarge};
    line-height: 3rem;
  `}
`
export const RightSide = styled.section`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.large};
    height: 90vh;

    ${CityCardStyles.Wrapper} {
      border: 1px solid ${theme.colors.green};
    }
  `}
`
export const CitiesWrapperLeft = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 89vh;
  margin-top: -8rem;
`
export const CitiesWrapperRight = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 89vh;
`
