import React from 'react'
import './cardItem.css'

function CardItem(props) {
    const classes = 'card' + props.className
  return (
    <div className={classes}>{props.children}</div>
  )
}

export default CardItem