import { useEffect, useState } from 'react'
import BeautyStars from 'beauty-stars'

import * as S from './styles'

export type ReviewCardProps = {
  name: string
  imageUrl: string
  description: string
  starry: number
}

const ReviewCard = ({
  name,
  imageUrl,
  description,
  starry
}: ReviewCardProps) => {
  useEffect(() => {
    setStars(starry)
  }, [starry])

  const [stars, setStars] = useState(0)
  return (
    <S.Wrapper>
      <S.ImageWrapper>
        <img src={imageUrl} alt={`Avatar of ${name}`} />
      </S.ImageWrapper>

      <S.ContentWrapper>
        <S.Header>
          <h3>{name}</h3>
          <BeautyStars value={stars} onChange={(value) => setStars(value)} />
        </S.Header>

        <S.Review>{description}</S.Review>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default ReviewCard
