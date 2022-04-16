import React from 'react'

function Header() {

    const iconMenu = () => {
        let humberger = document.querySelector('#menu-humberger');
        let navMenu = document.querySelector('#nav-menu');
        humberger.addEventListener('click', () => {
            humberger.classList.toggle('humberger-active');
            navMenu.classList.toggle('hidden')
        })
    }

    return (
        <header className="bg-transparent top-0 left-0 w-full flex item-center z-10">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-5">
                        <a href="#home" className="font-bold text-lg text-primary block py-6">RizkiTirta</a>
                    </div>
                    <div className="flex item-center px-4">
                        <button className="block absolute right-4 top-5 lg:hidden" type="button" id="menu-humberger" onClick={iconMenu}>
                            <span className="w-[30px] h-[2px] my-2 block bg-dark transition duration-300 ease-in-out origin-top-left "></span>
                            <span className="w-[30px] h-[2px] my-2 block bg-dark transition duration-300 ease-in-out"></span>
                            <span className="w-[30px] h-[2px] my-2 block bg-dark transition duration-300 ease-in-out origin-bottom-left "></span>
                        </button>

                        <nav id="nav-menu" className="hidden lg:block absolute lg:static bg-white lg:bg-transparent lg:max-w-full shadow-lg lg:shadow-none rounded-lg rounded-none max-w-[250px] w-full right-6 top-full">
                            <ul className="block lg:flex">
                                <li className="group"><a href="#home" className="text-base text-dark py-3 mx-6 group-hover:text-primary flex">Beranda</a></li>
                                <li className="group"><a href="#about" className="text-base text-dark py-3 mx-6 group-hover:text-primary flex">About</a></li>
                                <li className="group"><a href="#portofolio" className="text-base text-dark py-3 mx-6 group-hover:text-primary flex">Portofolio</a></li>
                                <li className="group"><a href="#contact" className="text-base text-dark py-3 mx-6 group-hover:text-primary flex">Client</a></li>
                                <li className="group"><a href="#" className="text-base text-dark py-3 mx-6 group-hover:text-primary flex">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header