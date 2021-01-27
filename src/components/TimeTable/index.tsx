import * as S from './styles'

export type TimeTableProps = {
  weekDay: string
  hours: string
}

const TimeTable = ({ weekDay, hours }: TimeTableProps) => (
  <S.Wrapper>
    <h4>{weekDay}</h4>
    <h3>{hours}</h3>
  </S.Wrapper>
)

export default TimeTable
