import React from 'react'
import logo from '../../images/logo.png'
import logoDark from '../../images/logoDark.png'
import { NavLink } from 'react-router-dom'

const Navbar = ({routes}) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
            <Nav>
                <div className="container flex flex-wrap items-center justify-between px-4">
                    <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
                        <NavLink to="/" className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap">
                            <img className="block w-2/3 md:w-7/12 dark:hidden" src={logo} alt="logo"/>
                            <img className="hidden w-2/3 md:w-7/12 dark:block" src={logoDark} alt="logo"/>
                        </NavLink>
                        <button
                            className="block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}>
                            <svg className="w-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                        </button>
                    </div>
                
                    <div className={"lg:flex flex-grow justify-center items-center" + (navbarOpen ? " flex" : " hidden")}>
                        <ul className="flex flex-col items-center list-none text-md font-openSans text-grey lg:flex-row lg:ml-auto">
                            <NavLink to='/' className="flex items-center m-3 text-xs font-bold leading-snug hover:text-greyLight hover:opacity-75">
                                <svg className="w-8 h-8 text-primary dark:text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                            </NavLink>
                            {routes.filter(route => route.path !== '/').map(route => {
                                return route.external ?
                                    <li className="nav-item">
                                        <NavLink to={{ pathname : route.path }} target="_blank" activeClassName="text-greyLight dark:text-greyDarker" className="flex items-center m-3 font-bold hover:text-greyLight dark:hover:text-greyDarker">
                                            <span className="ml-2">{route.name}</span>
                                        </NavLink>
                                    </li>
                                :
                                    <li className="nav-item">
                                        <NavLink to={route.path} activeClassName="text-greyLight dark:text-greyDarker" className="flex items-center m-3 font-bold hover:text-greyLight dark:hover:text-greyDarker">
                                            <span className="ml-2">{route.name}</span>
                                        </NavLink>
                                    </li>
                            })} 
                        </ul>
                    </div>
                </div>
            </Nav>
        </>
    );
}

const Nav = ({children}) => (
    <nav className="relative flex flex-wrap items-center justify-between p-5 mx-auto mb-3 md:w-4/5">{children}</nav>
);

export default Navbar
