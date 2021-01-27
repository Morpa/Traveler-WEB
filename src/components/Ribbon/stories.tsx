import { Story, Meta } from '@storybook/react/types-6-0'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    rating: 4.5
  }
} as Meta

export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
      marginTop: '4rem',
      width: '30rem',
      height: '25rem',
      position: 'relative',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
)
