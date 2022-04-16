import React from 'react'

function inputText(props) {
    return (
        <div >
            <label className="text-base text-primary font-bold ml-3" htmlFor={props.title}>{props.title}*</label>
            <input type={props.type ?? 'text'} autoComplete="off" id={props.nama} name={props.name} className="w-full mt-2 p-2 bg-slate-100 text-dark rounded-full focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"></input>
        </div>
    )
}

export default inputText