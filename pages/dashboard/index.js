import React from 'react'
import Footer from '../../src/components/footer'
import Header from '../../src/components/Header'

function Dashboard() {
  return (
    <div>
      <Header />
      <section id='dashboard'>
        <div className="container mx-auto px-4">
          <div className="w-full md:px-32 ">
            <h1 className='font-bold text-center text-primary md:text-2xl'>Welcome To Dashboard</h1>
            <img src="./images/growth.gif" className="w-full h-full md:w-1/2 md:h-1/2 mx-auto"></img>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Dashboard