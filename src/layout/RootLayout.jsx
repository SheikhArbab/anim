import React from 'react'
import { Home } from '../pages/index'
import { Navbar, Footer } from '../components/index'

const RootLayout = () => {
  return (
    <div className='w-full text-white bg-zinc-900'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default RootLayout
