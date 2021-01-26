import { Story, Meta } from '@storybook/react/types-6-0'
import ReviewCard, { ReviewCardProps } from '.'

export default {
  title: 'ReviewCard',
  component: ReviewCard,
  args: {
    name: 'Patricksom Vieras',
    imageUrl: 'https://source.unsplash.com/user/willianjusten/300x140',
    description:
      'Todos os produtos comercializados são de excelente qualidade, recomendo!',
    starry: 4
  }
} as Meta

export const Default: Story<ReviewCardProps> = (args) => (
  <ReviewCard {...args} />
)
