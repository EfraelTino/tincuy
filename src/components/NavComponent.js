import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const navBar = [
    { id: 1, name: "Inicio" },
    { id: 2, name: "Producto" },
    { id: 3, name: "Comercio" },
    { id: 4, name: "Contacto" },
]
const navLog = [
    { id: 1, name: "Crear cuenta" },
    { id: 2, name: "Iniciar Sesión" },
]

const NavComponent = () => {
    const [isSelected, setIsSelected] = useState(false);
    const [nav, setNav] = useState(false);
    const handleNav = () =>{
        setNav(false)
    }
    return (
        
        <nav className="border-gray-200 py-3.5 lg:py-5">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link to="/" className="flex items-center">
                <span className="self-center text-2xl   font-bold whitespace-nowrap">Tinky</span>
            </Link>
            <div className="flex md:hidden md:order-2">
                <button data-collapse-toggle="navbar-cta" type="button"
                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"  onClick={() => setNav(!nav)}
                    aria-controls="navbar-cta" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"></path>
                    </svg>  
                </button>
            </div>
            <div className={` justify-between items-center w-full ${nav ? 'block' : 'hidden' } md:flex md:w-auto md:order-1`}>
                {
                    navBar.map((item) => (
                        <ul className="flex md:items-center flex-col p-4 mt-4 md:flex-row md:space-x-14 md:mt-0 md:text-sm md:font-medium" key={item.id}>
                            <li >
                                <Link to='/about' onClick={handleNav}
                                    className={`block py-2 pr-4 text-center border-b-4 ${nav ? 'border-b-green-500' : ''} hover:border-b-green-500 pl-3 text-pureBlack font-medium text-lg md:bg-transparent hover:text-green-500  md:p-0`}
                                    aria-current="page">{item.name}</Link>
                            </li>
                        </ul>
                    ))
                }
                {navLog.map((item) => (
                    <ul
                        className="flex md:items-center flex-col p-4 mt-4 md:flex-row md:space-x-14 md:mt-0 md:text-sm md:font-medium" key={item.id}>
                        <li >
                            <a href="#"
                                className={`block mt-4 md:mt-0 text-pureBlack border-2 focus:ring-blue-300 font-medium ${item.id === 2 ? 'bg-green-500 text-white hover:text-green-500 hover:border-green-500 hover:bg-white' : ''} rounded-lg text-lg  py-3 px-5 text-center md:mr-0`}>{item.name}</a>
                        </li>
                    </ul>
                ))
                }

            </div>
        </div>
    </nav>

        
        
    );
}

export default NavComponent;