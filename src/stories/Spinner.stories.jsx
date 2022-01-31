import React from 'react'
import Spinner from './Spinner'
// import Center from './Center'

export default {
  title: 'Form/Spinner',
  component: Spinner,
  // decorators: [(story) => <Center>{story()}</Center>],
}

export const Primary = () => <Spinner variant="primary" />
export const Alert = () => <Spinner variant="alert" />
export const Danger = () => <Spinner variant="danger" />
export const Teal = () => <Spinner variant="teal" />

// const Template = (args) => <Spinner {...args} />
