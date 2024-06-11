import React from 'react'

export const Button = (props) => {
  return (
    <button className='bg-blue-400 p-4 rounded-lg ml-5' onClick={props.onClick}>{props.value}</button>
  )
}
