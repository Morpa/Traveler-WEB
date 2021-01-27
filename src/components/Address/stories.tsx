import { Story, Meta } from '@storybook/react/types-6-0'
import Address, { AddressProps } from '.'

export default {
  title: 'Address',
  component: Address,
  args: {
    address: 'Av. da Boavista, 850 Nevolgide, Porto - PT, 8801-290',
    coords: [41.1621376, -8.6569731]
  }
} as Meta

export const Default: Story<AddressProps> = (args) => (
  <div style={{ maxWidth: '45rem', maxHeight: '16rem' }}>
    <Address {...args} />
  </div>
)
