import React from 'react'
import { useState, useEffect } from 'react'
import Button from '../../src/components/button'
import Footer from '../../src/components/footer'
import Header from '../../src/components/Header'
import InputText from '../../src/components/inputText'
import TextArea from '../../src/components/textArea'
import axios from 'axios'
import swal from 'sweetalert'
import Select from 'react-select';

function Portofolio() {
    const [inputFields, setInputFields] = useState([{ name: `image0`, title: 'Images', value: '' }])
    const [nama, setNama] = useState('')
    const [deskripsi, setDeskripsi] = useState('')
    const [image, setImage] = useState('')
    const [count, setCount] = useState(1)
    const [isEdit, setIsEdit] = useState(false)
    const [id, setId] = useState('')
    const [createObjectURL, setCreateObjectURL] = useState(null);
    const [options, setOptions] = useState([])
    const [tags, setTags] = useState([])
    const [portofolios, setPortofolios] = useState([])

    useEffect(() => {
        getTags()
    }, [])

    const getTags = async () => {
        axios.get('http://localhost:3000/api/v1/tag')
            .then(res => {
                const response = res.data;
                setOptions(response.data.map(item => ({ value: item.id, label: item.name })))
            })
            .catch(err => {
                console.log(err)
            })
    }

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
        setImage(e.target.files[0])
        setCreateObjectURL(URL.createObjectURL(e.target.files[0]));
    }

    const handlerSelect = (e) => {
        setTags(e)
    }

    // Fetch API
    useEffect(() => {
        getPortofolio()
    }, [])

    const savePortofolio = async (e) => {
        e.preventDefault()

        const body = new FormData();
        body.append("files", image);
        body.append("name", nama);
        body.append("tags", JSON.stringify(tags));
        body.append("deskripsi", deskripsi);
        axios.post('http://localhost:3000/api/v1/portofolio/create', body, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {
                swal("Success!", res.data.message, "success");
                getPortofolio()
                resetForm()
            })
            .catch(err => {
                swal("Ups!", err.message, "error");
                console.log(err)
            })
    };

    const resetForm = () => {
        setNama('')
        setDeskripsi('')
        setImage('')
        setTags([])
    }

    const editTag = (e, tag) => {
        e.preventDefault()
        setNama(tag.name)
        setIsEdit(true)
        setId(tag.id)
        console.log(tag.name)
    }

    const updateTag = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/api/v1/tag/edit', { id, name })
            .then(res => {
                swal("Success!", res.data.message, "success");
                setNama('')
                setIsEdit(false)
                setId('')
                getPortofolio()
            })
            .catch(err => {
                swal("Ups!", err.message, "error");
                setNama('')
                setIsEdit(false)
                setId('')
            })
    }

    const deleteTag = (e, id) => {
        e.preventDefault()
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    axios.post('http://localhost:3000/api/v1/tag/delete', { id })
                        .then(res => {
                            swal("Success!", res.data.message, "success");
                            getPortofolio()
                        })
                        .catch(err => {
                            swal("Ups!", err.message, "error");
                        })

                } else {
                    swal("Hapus Dibatalkan!");
                }
            });

    }

    const getPortofolio = () => {
        axios.get('http://localhost:3000/api/v1/portofolio')
            .then(res => {
                console.log(res.data)
                setPortofolios(res.data.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <div>
            <Header />
            <section id='portofolio'>
                <div className="container mx-auto pb-32 md:px-32 ">
                    <h1 className='font-bold text-primary mb-10 md:text-3xl'>Create Portofolio</h1>
                    <form onSubmit={(e) => savePortofolio(e)}>
                        <div className='mb-4 w-full'>
                            <label className="text-base text-primary font-bold ml-3" htmlFor={'nama'}>Nama*</label>
                            <input type={'text'} value={nama} autoComplete="off" id={'nama'} name={'nama'} onChange={e => setNama(e.target.value)} className="w-full mt-2 p-2 bg-slate-100 text-dark rounded-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"></input>
                        </div>

                        <Select options={options} onChange={e => handlerSelect(e)} isMulti />

                        <div className='mb-4 w-full'>
                            <label className="text-base text-primary font-bold ml-2" htmlFor={'deskripsi'}>Deskripsi*</label>
                            <textarea value={deskripsi} name={'deskripsi'} id={'deskripsi'} cols="20" rows={5} onChange={e => setDeskripsi(e.target.value)} className="w-full p-3 mt-2 bg-slate-100 text-dark rounded-lg focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"></textarea>
                        </div>
                        {
                            inputFields.map((input, index) => {
                                return (
                                    <div key={index} className={`flex flex-wrap`}>
                                        <div className='w-1/2'>
                                            <label className="text-base text-primary font-bold ml-2" htmlFor={'deskripsi'}>Image*</label>
                                            <input type="file" autoComplete="off" id={'images'} value={input.value} name={input.name} onChange={e => handleChange(e, index)} className="w-full mt-2 p-2 bg-slate-100 text-dark rounded-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"></input>
                                        </div>
                                        <div className='w-1/2 mt-4 '>
                                            {
                                                index > 0 ? <Button eventClick={(e) => removeFields(e, index)} nama="x" bgColor="bg-red-400" /> :
                                                    <Button disabled="true" eventClick={addFields} nama="+" bgColor="bg-green-400" />
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className='mb-4 float-right'>
                            <button type={'submit'} className={`text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg transition duration-300`}>Save</button>
                        </div>
                    </form>
                </div>
            </section>

            <section id='table'>
                <div className="container">
                    <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                        <thead className="text-white ">
                            {
                                portofolios.map(porto => {
                                    return (
                                        <tr key={porto.id} className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                            <th className="p-3 text-left">ID</th>
                                            <th className="p-3 text-left">Name</th>
                                            <th className="p-3 text-left">Deskripsi</th>
                                            <th className="p-3 text-left">Image</th>
                                            <th className="p-3 text-left">Created At</th>
                                            <th className="p-3 text-left" width="110px" rowSpan="3" colSpan={2}>Actions</th>
                                        </tr>
                                    )
                                })
                            }
                        </thead>
                        <tbody className="flex-1 sm:flex-none">
                            {
                                portofolios.map((porto, index) => {
                                    return (
                                        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0" key={porto.id}>
                                            <td className="border-grey-light border hover:bg-gray-100 p-3">{porto.id}</td>
                                            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">{porto.name}</td>
                                            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">{porto.deskripsi}</td>
                                            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                                                <img src={`/uploads/${porto.images}`}></img>
                                            </td>
                                            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">{porto.created}</td>
                                            <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                                                <Button type="submit" eventClick={e => editTag(e, porto.id)} nama="Edit" />
                                            </td>
                                            <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                                                <Button eventClick={e => deleteTag(e, porto.id)} bgColor="bg-red-500" type="submit" nama="Delete" />
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Portofolio