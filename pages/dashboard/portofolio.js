import React from 'react'
import { useState, useEffect } from 'react'
import Button from '../../src/components/button'
import Footer from '../../src/components/footer'
import Header from '../../src/components/Header'
import InputText from '../../src/components/inputText'
import TextArea from '../../src/components/textArea'

function Portofolio() {
    const [inputFields, setInputFields] = useState([{ name: `image0`, title: 'Images', value: '' }])
    const [nama, setNama] = useState('')
    const [deskripsi, setDeskripsi] = useState('')
    const [image, setImage] = useState('')
    const [count, setCount] = useState(1)

    useEffect(() => {
    }, [])


    const addFields = (e) => {
        e.preventDefault()
        setCount(count + 1)
        console.log(count)
        let newfield = { name: `image${count}`, title: 'Images', value: '' }
        setInputFields([...inputFields, newfield])
    }

    const removeFields = (e, id) => {
        e.preventDefault()
        setCount(count - 1)
        let newInputValues = [...inputFields]
        newInputValues.splice(id, 1)
        setInputFields(newInputValues)
    }

    const handleChange = (e, i) => {
        let newInputValues = [...inputFields]
        newInputValues[i][e.target.name] = e.target.files[0]
        setInputFields(newInputValues)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(nama)
        console.log(deskripsi)
        console.log(inputFields)
        console.log(image)
    }

    return (
        <div>
            <Header />
            <section id='portofolio'>
                <div className="container mx-auto pb-32 md:px-32 ">
                    <h1 className='font-bold text-primary mb-10 md:text-3xl'>Create Portofolio</h1>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className='mb-4 w-full'>
                            <label className="text-base text-primary font-bold ml-3" htmlFor={'nama'}>Nama*</label>
                            <input type={'text'} autoComplete="off" id={'nama'} name={'nama'} onChange={e => setNama(e.target.value)} className="w-full mt-2 p-2 bg-slate-100 text-dark rounded-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"></input>
                        </div>
                        <div className='mb-4 w-full'>
                            <label className="text-base text-primary font-bold ml-2" htmlFor={'deskripsi'}>Deskripsi*</label>
                            <textarea name={'deskripsi'} id={'deskripsi'} cols="20" rows={5} onChange={e => setDeskripsi(e.target.value)} className="w-full p-3 mt-2 bg-slate-100 text-dark rounded-lg focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"></textarea>
                        </div>
                        {
                            inputFields.map((input, index) => {
                                return (
                                    <div key={index} className={`flex flex-wrap`}>
                                        <div className='w-1/2'>
                                            <label className="text-base text-primary font-bold ml-2" htmlFor={'deskripsi'}>Image*</label>
                                            <input type="file" autoComplete="off" id={'images'} name={input.name} onChange={e => handleChange(e, index)} className="w-full mt-2 p-2 bg-slate-100 text-dark rounded-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"></input>
                                        </div>
                                        <div className='w-1/2 mt-4 '>
                                            {
                                                index > 0 ? <Button eventClick={(e) => removeFields(e, index)} nama="x" bgColor="bg-red-400" /> :
                                                    <Button eventClick={addFields} nama="+" bgColor="bg-green-400" />
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className='mb-4 float-right'><Button nama="Save" type="submit" /></div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Portofolio