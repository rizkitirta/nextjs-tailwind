import React from 'react'

function cardPorto(props) {
    return (
        <div className="mb-12 p-4 md:w-1/2 lg:w-1/2">
            <div className="rounded-md shadow-md overflow-hidden">
                <img src="https://picsum.photos/600/300" className="w-full"></img>
            </div>
            <h3 className="font-semibold text-xl text-dark mt-5 mb-3">Project 1</h3>
            <p className="font-medium text-base text-dark-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
    )
}

export default cardPorto