import React from 'react'
import Button from '../../src/components/button'
import Footer from '../../src/components/footer'
import Header from '../../src/components/Header'
import InputText from '../../src/components/inputText'

function Tag() {
    return (
        <div>
            <Header />
            <section id='tag'>
                <div className="container mx-auto pb-32 md:px-32 ">
                    <h1 className='font-bold text-primary mb-10 md:text-3xl'>Create Tag</h1>
                    <form>
                        <div className="flex flex-wrap">
                            <div className='mb-4 w-1/2'><InputText nama="Nama" /></div>
                            <div className='mb-4 mt-7 ml-4 w-1/4'><Button nama="Save" /></div>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Tag