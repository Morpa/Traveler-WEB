import { Story, Meta } from '@storybook/react/types-6-0'
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Acesso Restrito'
}

export const withIcon: Story<ButtonProps> = (args) => <Button {...args} />

withIcon.args = {
  size: 'medium',
  children: 'Entre em contacto',
  color: 'green',
  icon: <Whatsapp />,
  textColor: 'primary'
}

export const asLink: Story<ButtonProps> = (args) => <Button {...args} />
asLink.args = {
  size: 'large',
  children: 'Descobrir todos os lugares',
  as: 'a',
  href: 'link',
  color: 'orange',
  textColor: 'primary'
}
