import React from 'react'
import gobelins from '../../images/presentation/gobelins.png';
import portfolio from '../../images/presentation/portfolio.gif';
import Illustrations from './projets/Illustrations';
import AirFrance from './projets/AirFrance';
import ExpoEntrepreneurs from './projets/ExpoEntrepreneurs';
import Vivenda from './projets/Vivenda';
import Introduction from './projets/Introduction';
import Under from './projets/Under';
import Decorban from './projets/deCorban';
import Tsumi from './projets/Tsumi';
import XavierBlondeau from './projets/XavierBlondeau';

function Presentation() {
    
    return (
        <div className="container px-20 m-auto bg-white py-14">
            <div className="flex justify-between text-4xl font-bold text-greyDark font-openSans">
                <div className="flex flex-col tracking-lg">
                    <span>RAMBINAISING</span>
                    <span>Dylan</span>
                </div>
                <span className="tracking-xl">PORTFOLIO</span>
            </div>
            
            <div className="relative flex flex-wrap justify-end">
                <img className="m-auto mb-20" src={portfolio} alt="" />
                <img className="absolute bottom-0 my-10" src={gobelins} alt="" />
            </div>

            <div className="my-20 border-b border-black"></div>
            <div className="flex justify-end mr-20">
                <ul className="w-1/2">
                    <li className="text-4xl font-bold uppercase border-b border-black">01. À Propos de moi</li>
                    <li className="text-4xl font-bold uppercase border-b border-black">02. Illustrations</li>
                    <li className="text-4xl font-bold uppercase border-b border-black">03. AirFrance</li>
                    <li className="text-4xl font-bold uppercase border-b border-black">04. ExpoEntrepreneurs</li>
                    <li className="text-4xl font-bold uppercase border-b border-black">05. vivenda - les loges</li>
                </ul>
            </div>
            <div className="my-20 border-b border-black"></div>

            <Introduction />
            
            <div className="my-20 border-b border-black"></div>

            <div className="w-full text-xl">
                <Illustrations />
            </div>
            
            <div className="my-20 border-b border-black"></div>
            
            <AirFrance />
            <div className="my-20 border-b border-black"></div>

            <ExpoEntrepreneurs />
            <div className="my-20 border-b border-black"></div>

            <Under />
            <div className="my-20 border-b border-black"></div>

            <Vivenda />
            <div className="my-20 border-b border-black"></div>

            <Decorban />
            <div className="my-20 border-b border-black"></div>

            <Tsumi />
            <div className="my-20 border-b border-black"></div>

            <XavierBlondeau />

        </div>
    )
}

export default Presentation
