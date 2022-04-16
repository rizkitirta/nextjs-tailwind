import React from 'react'
import { useState, useEffect } from 'react'
import Button from '../../src/components/button'
import Footer from '../../src/components/footer'
import Header from '../../src/components/Header'
import InputText from '../../src/components/inputText'
import TextArea from '../../src/components/textArea'

function Portofolio() {
    const [inputFields, setInputFields] = useState([])

    useEffect(() => {
    }, [inputFields])


    const addFields = (e) => {
        e.preventDefault()
        let newfield = { name: 'images', title: 'Images' }
        setInputFields([...inputFields, newfield])
        console.log(inputFields)
    }

    const removeFields = (e, id) => {
        e.preventDefault()
        const index = inputFields.indexOf(id);
        if (index >= -1) {
            inputFields.splice(index, 1);
        }
        console.log(inputFields)

    }

    return (
        <div>
            <Header />
            <section id='portofolio'>
                <div className="container mx-auto pb-32 md:px-32 ">
                    <h1 className='font-bold text-primary mb-10 md:text-3xl'>Create Portofolio</h1>
                    <form>
                        <div className='mb-4 w-full'><InputText title="Nama" /></div>
                        <div className='mb-4 w-full'><TextArea title="Deskripsi" name="deskripsi" /></div>
                        <div id='fileInput'></div>
                        {
                            inputFields.map((input, index) => {
                                return (
                                    <div key={index} className='flex flex-wrap'>
                                        <div className='w-1/2'><InputText title={input.title} name={input.name} type="file" /></div>
                                        <div className='w-1/2 mt-8 '><Button eventClick={(e) => removeFields(e, index)} nama="x" bgColor="bg-red-400" /></div>
                                    </div>
                                )
                            })
                        }
                        <div className='flex flex-wrap'>
                            <div className='w-1/2'><InputText title="Image" name="images[]" type="file" /></div>
                            <div className='w-1/2 mt-8 '><Button eventClick={addFields} nama="+" bgColor="bg-green-400" /></div>
                        </div>
                        <div className='mb-4 float-right'><Button nama="Save" /></div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Portofolio