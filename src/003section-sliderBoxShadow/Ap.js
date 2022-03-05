import React, { useState } from 'react'
import classes from './Ap.module.css'

function useScroll() {
  const [top, setTop] = useState(0)
  const [down, setDown] = useState(0)
  const onScroll = (event) => {
    setDown(event.target.scrollHeight - event.target.offsetHeight - 10)
    setTop(event.target.scrollTop)
  }
  return [top, down, { onScroll }]
}

export const Ap = () => {
  const [top, down, scrollProps] = useScroll()

  console.log(top)
  return (
    <div className={classes.upper}>
      <div
        {...scrollProps}
        className={
          top < 10
            ? classes.parent1
            : top > down
            ? classes.parent2
            : classes.parent3
        }
      >
        Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem
        ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum
        dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor
        sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
        Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem
        ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum
        dolor sit Lorem ipsum dolor sit sit Lorem ipsum dolor sit Lorem ipsum
        dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor
        sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
        Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
      </div>
    </div>
  )
}

export default Ap
