import { Story, Meta } from '@storybook/react/types-6-0'
import CityCard, { CityCardProps } from '.'

export default {
  title: 'CityCard',
  component: CityCard,
  args: {
    city: 'Cidade Linda',
    locals: 34,
    imageUrl: 'https://source.unsplash.com/user/morpa/'
  }
} as Meta

export const Default: Story<CityCardProps> = (args) => <CityCard {...args} />
