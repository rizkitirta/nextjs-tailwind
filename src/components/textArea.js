import React from 'react'

function textArea(props) {
    return (
        <div>
            <label className="text-base text-primary font-bold ml-2" htmlFor={props.title}>{props.title}*</label>
            <textarea name={props.name} id={props.title} className="w-full p-3 mt-2 bg-slate-100 text-dark rounded-lg focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"></textarea>
        </div>
    )
}

export default textArea