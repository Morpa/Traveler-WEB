import { Story, Meta } from '@storybook/react/types-6-0'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    name: 'search',
    initialValue: '',
    placeholder: 'Qual cidade você procura?'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 400, padding: 15 }}>
    <TextField {...args} />
  </div>
)
