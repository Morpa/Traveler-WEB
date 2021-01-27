import { Story, Meta } from '@storybook/react/types-6-0'
import Spotlight, { SpotlightProps } from '.'

export default {
  title: 'Spotlight',
  component: Spotlight,
  args: {
    city: 'Cidade Linda',
    description:
      'Um belo lugar maravilhoso que um dia eu quero que você venha conhcecer',
    imageUrl: 'https://source.unsplash.com/user/willianjusten/'
  }
} as Meta

export const Default: Story<SpotlightProps> = (args) => <Spotlight {...args} />
