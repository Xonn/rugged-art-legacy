import React from 'react'
import Logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between p-5 mb-3 mx-36">
                <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
                    <div className="relative flex justify-center w-full lg:w-auto lg:static lg:block lg:justify-start">
                        <a className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap" href="#pablo">
                            <img className="w-44" src={Logo} alt="logo"/>
                        </a>
                        <button
                            className="block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}>
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                
                    <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}>
                        <ul className="flex flex-col items-center list-none text-md font-openSans text-grey lg:flex-row lg:ml-auto">
                            <li className="nav-item">
                                <NavLink to="/" className="flex items-center m-3 text-xs font-bold leading-snug hover:text-greyLight hover:opacity-75">
                                    {/* <svg className="w-6 h-6 font-bold text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg> */}
                                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/portfolio" activeClassName="text-greyLight" className="flex items-center m-3 font-bold hover:text-greyLight">
                                    <span className="ml-2">Portfolio</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" activeClassName="text-greyLight" className="flex items-center m-3 font-bold hover:text-greyLight">
                                    <span className="ml-2">À propos</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/shop" activeClassName="text-greyLight" className="flex items-center m-3 font-bold hover:text-greyLight">
                                    <span className="ml-2">Shop</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="contact" activeClassName="text-greyLight" className="flex items-center m-3 font-bold hover:text-greyLight">
                                    <span className="ml-2">Contact</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar
