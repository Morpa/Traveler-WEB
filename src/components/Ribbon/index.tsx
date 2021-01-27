import { Star } from '@styled-icons/material-outlined/Star'

import * as S from './styles'

export type RibbonProps = {
  children: React.ReactNode
  rating: number
}

const Ribbon = ({ rating, children }: RibbonProps) => (
  <S.Wrapper>
    <Star />
    <span>{rating}</span>
    {children}
  </S.Wrapper>
)

export default Ribbon
