import React from 'react'
import Navbar from '../../../widgets/navbar/ui'
import Footer from '../../../widgets/footer/Footer'

export default function Layout({children}) {
  return (
    <div className='font-DM'>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}
