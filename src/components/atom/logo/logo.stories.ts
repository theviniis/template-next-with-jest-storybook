import type { Meta, StoryObj } from '@storybook/react'
import { Logo } from './logo'

const meta = {
  title: 'Atoms/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Logo>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    src: '/img/logo.svg',
    alt: 'Imagem de um átomo e React Avançado escrito ao lado.',
    width: 384,
    height: 0,
  },
}
