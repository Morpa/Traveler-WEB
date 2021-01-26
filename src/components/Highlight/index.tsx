import * as S from './styles'

export type HighlightProps = {
  icon: React.ReactNode
  count: number
  title: string
}

const Highlight = ({ icon, count, title }: HighlightProps) => (
  <S.Wrapper>
    <S.Icon aria-label="Icon">{icon}</S.Icon>
    <S.Info>
      <h1 aria-label="Quantidade do cartão">{count}</h1>
      <span aria-label="Título do cartão">{title}</span>
    </S.Info>
  </S.Wrapper>
)

export default Highlight
