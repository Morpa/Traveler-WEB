import { ExclamationCircle } from '@styled-icons/bootstrap/ExclamationCircle'

import * as S from './styles'

export type SpotlightProps = {
  city: string
  description: string
  imageUrl: string
}

const Spotlight = ({ city, description, imageUrl }: SpotlightProps) => (
  <S.Wrapper>
    <S.TextWrapper>
      <S.Bullet>
        <S.Icon>
          <ExclamationCircle />
        </S.Icon>
        Destaque
      </S.Bullet>
      <S.Title>{city}</S.Title>
      <S.Description>{description}</S.Description>
    </S.TextWrapper>
    <S.ImageWrapper>
      <img src={imageUrl} alt={`Picture of ${city}`} />
    </S.ImageWrapper>
  </S.Wrapper>
)

export default Spotlight
