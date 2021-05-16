import React from 'react'
import gobelins from '../../images/presentation/gobelins.png';
import arrow from '../../images/presentation/arrow.png';
import smiley from '../../images/presentation/smiley.gif';
import portfolio from '../../images/presentation/portfolio.gif';
import sommary from '../../images/presentation/sommary.gif';
import Illustrations from './projets/Illustrations';
import AirFrance from './projets/AirFrance';
import ExpoEntrepreneurs from './projets/ExpoEntrepreneurs';
import Vivenda from './projets/Vivenda';
import Introduction from './projets/Introduction';
import Under from './projets/Under';
import Decorban from './projets/deCorban';
import Tsumi from './projets/Tsumi';
import XavierBlondeau from './projets/XavierBlondeau';
import ten from '../../images/presentation/10.png';
import wave from '../../images/presentation/wave.gif';
import thanks from '../../images/presentation/thanks.gif';

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
            <div className="relative flex items-center justify-end mr-20 ">
                <div className="w-1/2">
                <img className="absolute bottom-0 left-20" src={smiley} alt="" />
                    <img src={sommary} alt="" />
                </div>
                <ul className="w-1/2">
                    <li className="relative my-2 border-b border-black"><button className="my-1 text-4xl font-bold uppercase hover:text-third">01. À Propos de moi</button><img className="absolute right-0 bottom-2" src={arrow} alt="" /></li>
                    <li className="relative my-2 border-b border-black"><button className="my-1 text-4xl font-bold uppercase hover:text-third">02. Illustrations</button><img className="absolute right-0 bottom-2" src={arrow} alt="" /></li>
                    <li className="relative my-2 border-b border-black"><button className="my-1 text-4xl font-bold uppercase hover:text-third">03. AirFrance</button><img className="absolute right-0 bottom-2" src={arrow} alt="" /></li>
                    <li className="relative my-2 border-b border-black"><button className="my-1 text-4xl font-bold uppercase hover:text-third">04. ExpoEntrepreneurs</button><img className="absolute right-0 bottom-2" src={arrow} alt="" /></li>
                    <li className="relative my-2 border-b border-black"><button className="my-1 text-4xl font-bold uppercase hover:text-third">05. Under</button><img className="absolute right-0 bottom-2" src={arrow} alt="" /></li>
                    <li className="relative my-2 border-b border-black"><button className="my-1 text-4xl font-bold uppercase hover:text-third">06. Vivenda - Les loges</button><img className="absolute right-0 bottom-2" src={arrow} alt="" /></li>
                    <li className="relative my-2 border-b border-black"><button className="my-1 text-4xl font-bold uppercase hover:text-third">07. deCorban</button><img className="absolute right-0 bottom-2" src={arrow} alt="" /></li>
                    <li className="relative my-2 border-b border-black"><button className="my-1 text-4xl font-bold uppercase hover:text-third">08. Tsumi</button><img className="absolute right-0 bottom-2" src={arrow} alt="" /></li>
                    <li className="relative my-2 border-b border-black"><button className="my-1 text-4xl font-bold uppercase hover:text-third">09. Xavier Blondeau</button><img className="absolute right-0 bottom-2" src={arrow} alt="" /></li>
                    <li className="relative my-2 border-b border-black"><button className="my-1 text-4xl font-bold uppercase hover:text-third">10. Conclusion</button><img className="absolute right-0 bottom-2" src={arrow} alt="" /></li>
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
            <div className="my-20 border-b border-black"></div>
            <h2 className="relative flex items-center my-10 text-4xl font-bold uppercase ml-44">
                <img className="absolute -left-32" src={ten} alt="" />
                Conclusion
            </h2>
            <div className="flex flex-wrap justify-center mt-32 space-y-40">
                <img src={wave} alt="" />
                <img src={thanks} alt="" />
            </div>
        </div>
    )
}

export default Presentation
