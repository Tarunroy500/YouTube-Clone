import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex gap-1'>
      <Button name="All"/>
      <Button name="Gaming"/>
      <Button name="Songs"/>
      <Button name="Live"/>
      <Button name="Soccer"/>
      <Button name="Movies"/>
      <Button name="News"/>
      <Button name="Fashion"/>
      <Button name="Learning"/>
      <Button name="Tech"/>
      <Button name="Food"/>
      <Button name="Travel"/>
      <Button name="History"/>
    </div>
  )
}

export default ButtonList
