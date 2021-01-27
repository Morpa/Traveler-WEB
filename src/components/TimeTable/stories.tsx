import { Story, Meta } from '@storybook/react/types-6-0'
import TimeTable, { TimeTableProps } from '.'

export default {
  title: 'TimeTable',
  component: TimeTable,
  args: {
    weekDay: 'Domingo',
    hours: '8h - 17h'
  }
} as Meta

export const Default: Story<TimeTableProps> = (args) => <TimeTable {...args} />
