import React from 'react'

function iconBorder(props) {
    return (
        <a href="#" className="w-12 h-12 mr-3 rounded-full flex justify-center item-center text-slate-400 border border-slate-300 hover:border-primary hover:bg-primary hover:text-white">
            {props.icon}
        </a>
    )
}

export default iconBorder