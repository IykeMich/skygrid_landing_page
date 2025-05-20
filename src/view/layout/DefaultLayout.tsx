import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navComponents/Navbar'
import React from 'react'

export default function DefaultLayout({children}: { children: React.ReactNode }) {
  return (
    <div>
        <Navbar />
        <div className="">
            {children}
        </div>
        <Footer />
    </div>
  )
}
