import * as S from './styles'

export type CityCardProps = {
  city: string
  imageUrl: string
  locals: number
}

const CityCard = ({ city, imageUrl, locals }: CityCardProps) => (
  <S.Wrapper>
    <S.ImageWrapper>
      <img src={imageUrl} alt={`Picture of ${city}`} />
    </S.ImageWrapper>
    <S.Content>
      <h2>{city}</h2>
      <span>{locals} locais</span>
    </S.Content>
  </S.Wrapper>
)

export default CityCard
