import React, { useState } from 'react'
import classes from './Ap.module.css'

function useScrollTop() {
  const [top, setScrollTop] = useState(0)
  const [he, setHe] = useState(0)
  const onScroll = (event) => {
    setHe(event.target.scrollHeight - event.target.offsetHeight - 10)
    setScrollTop(event.target.scrollTop)
  }
  return [top, he, { onScroll }]
}

export const Ap = () => {
  const [scrollTop, he, scrollProps] = useScrollTop()

  console.log(scrollTop)
  return (
    <div className={classes.dupa}>
      <div
        {...scrollProps}
        className={
          scrollTop < 8
            ? classes.parent1
            : scrollTop > he
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
