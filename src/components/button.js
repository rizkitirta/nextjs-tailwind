import React from 'react'

function Button(props) {
    return <button type={props.type ?? 'button'} onClick={props.eventClick} className={`text-base font-semibold text-white ${props.bgColor ?? 'bg-primary'} py-3 px-8 rounded-full hover:opacity-80 hover:shadow-lg transition duration-300`}>{props.nama}</button>
}

export default Button