import { React, useState, useEffect } from 'react'
import Button from '../../src/components/button'
import Footer from '../../src/components/footer'
import Header from '../../src/components/Header'
import InputText from '../../src/components/inputText'
import axios from 'axios';
import swal from 'sweetalert'

function Tag() {
    const [name, setName] = useState('')
    const [tags, setTags] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [id, setId] = useState('')

    useEffect(() => {
        getTag()
    }, [tags])

    const saveTag = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/hello', { name })
            .then(res => {
                console.log(res)
                swal("Success!", res.data.message, "success");
            })
            .catch(err => {
                swal("Ups!", err.message, "error");
                console.log(err)
            })
    }

    const editTag = (e, tag) => {
        e.preventDefault()
        setName(tag.name)
        setIsEdit(true)
        setId(tag.id)
        console.log(tag.name)
    }

    const updateTag = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/api/v1/tag/edit', { id, name })
            .then(res => {
                swal("Success!", res.data.message, "success");
                setName('')
                setIsEdit(false)
                setId('')
            })
            .catch(err => {
                swal("Ups!", err.message, "error");
                setName('')
                setIsEdit(false)
                setId('')
            })
    }

    const getTag = () => {
        axios.get('http://localhost:3000/api/v1/tag')
            .then(res => {
                console.log(res.data)
                setTags(res.data.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <div>
            <Header />
            <div className="container">
                <section id='tag'>
                    <div className="container mx-auto pb-32 md:px-32 ">
                        <h1 className='font-bold text-primary mb-10 md:text-3xl'>Create Tag</h1>
                        <form onSubmit={(e) => isEdit ? updateTag(e) : saveTag(e)}>
                            <div className="flex flex-wrap">
                                <div className='mb-4 w-full'>
                                    <label className="text-base text-primary font-bold ml-3">Name*</label>
                                    <input type='text' value={name ?? ''} onChange={e => setName(e.target.value)} autoComplete="off" className="w-full mt-2 p-2 bg-slate-100 text-dark rounded-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"></input>
                                </div>
                                <div className='mb-4 ml-4 w-full '>
                                    <div className="float-right flex flex-wrap">
                                        <Button type="submit" nama={isEdit ? 'Update' : 'Save'} />
                                        {isEdit ? <Button bgColor="bg-red-500" eventClick={e => setIsEdit(false)} type="submit" nama='Batal' /> : ''}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>

                <section id='table'>
                    <div className="container">
                        <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                            <thead className="text-white ">
                                {
                                    tags.map(tag => {
                                        return (
                                            <tr key={tag.id} className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                                <th className="p-3 text-left">ID</th>
                                                <th className="p-3 text-left">Name</th>
                                                <th className="p-3 text-left">Created At</th>
                                                <th className="p-3 text-left" width="110px" rowSpan="3" colSpan={2}>Actions</th>
                                            </tr>
                                        )
                                    })
                                }
                            </thead>
                            <tbody className="flex-1 sm:flex-none">
                                {
                                    tags.map((tag, index) => {
                                        return (
                                            <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0" key={tag.id}>
                                                <td className="border-grey-light border hover:bg-gray-100 p-3">{tag.id}</td>
                                                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">{tag.name}</td>
                                                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">{tag.created}</td>
                                                <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                                                    <Button type="submit" eventClick={e => editTag(e, tag)} nama="Edit" />
                                                </td>
                                                <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer"><Button bgColor="bg-red-500" type="submit" nama="Delete" /></td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    )
}

export default Tag