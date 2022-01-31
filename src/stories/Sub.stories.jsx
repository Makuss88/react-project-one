import React from 'react'

import { Large } from './Input.stories'
import { Primary } from './Spinner.stories'

export default {
  title: 'Form/Sub',
}

export const PrimaryLarge = () => {
  return (
    <>
      <Primary />
      <Large />
    </>
  )
}
