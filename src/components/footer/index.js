import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/footer/logo.png';
import {socialNetwork} from '../../data/socialNetwork';

const Index = ({routes}) => {
    return (
        <Footer>
            <div className="h-full m-auto my-5 md:block md:my-auto md:w-1/4">
                <img className="h-auto m-auto w-44" src={logo} alt="Logo"/>
            </div>
                <div className="flex justify-center order-3 w-full mb-10 md:w-2/4">
                {socialNetwork.map(sn => 
                    <a href={sn.url} rel="noreferrer" target="_blank">
                        <img className="w-16" src={sn.image} alt={sn.name}/>
                    </a>
                )}
                </div>
            <div className="static left-0 right-0 flex flex-wrap justify-center order-4 w-full text-center md:absolute bottom-10">
                <strong className="w-full ">Dylan RAMBINAISING</strong>
                <span className="w-full text-sm">© 2018 Rugged. Tous droits réservés*</span>
            </div>
            <div className="order-1 w-full list-none md:order-3 md:w-1/4">
                <ul className="flex flex-wrap justify-center m-5 md:block md:border-l md:border-grey">
                {routes.map(route => {
                    return route.external ?
                    <li className="leading-8">
                        <Link className="px-5 hover:text-greyLight" target="_blank" to={{pathname: route.path}}>{route.name}</Link>
                    </li>
                    :
                    <li className="leading-8">
                        <Link className="px-5 hover:text-greyLight" to={route.path}>{route.name}</Link>
                    </li>
                })}
                </ul>
            </div>
        </Footer>
    )
}

const Footer = ({children}) => (
    <footer className="relative flex flex-wrap p-3 mt-10 bg-greyDarker text-grey">{children}</footer>
);

export default Index
