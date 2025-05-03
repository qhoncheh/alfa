import React from 'react'
import { TbPointFilled } from 'react-icons/tb'
import { Button } from '../custom'
const Header = () => {
  return (
    <div className='flex flex-row justify-between '>
      <div className='flex flex-row gap-3'>
        <Button className=''><TbPointFilled />خانه</Button>
        <Button className=''>خانه</Button>
        <Button className=''>خانه</Button>
      </div>

  </div>


  )
}

export default Header