import React from 'react'
import './input.css'

const Input = ({ ...props }) => {
  return (
    <input {...props} className='search-input'/>
  )
}

export default Input
