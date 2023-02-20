import React from 'react'
import Nav from './Nav'
import Showcase from './Showcase'

const Header = () => {
  return (
    <header className='p-4'>
      <Nav/>
      <Showcase/>
    </header>
  )
}

export default Header
