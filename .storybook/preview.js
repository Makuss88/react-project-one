import React from 'react'
import { addDecorator } from '@storybook/react'
import Center from '../src/stories/Center'

addDecorator((story) => <Center>{story()}</Center>)
