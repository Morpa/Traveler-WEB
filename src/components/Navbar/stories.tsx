import { Story, Meta } from '@storybook/react/types-6-0'
import Navbar, { NavbarProps } from '.'

export default {
  title: 'Navbar',
  component: Navbar
} as Meta

export const Default: Story<NavbarProps> = () => <Navbar />
