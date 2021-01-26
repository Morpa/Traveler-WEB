import { Story, Meta } from '@storybook/react/types-6-0'
import { Camera } from '@styled-icons/bootstrap/Camera'
import Highlight, { HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  argTypes: {
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<HighlightProps> = (args) => <Highlight {...args} />
Default.args = {
  icon: <Camera />,
  title: 'Pontos Turísticos',
  count: 65
}
