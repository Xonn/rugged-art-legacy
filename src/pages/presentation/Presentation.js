import React from 'react'
import gobelins from '../../images/presentation/gobelins.png';
import portfolio from '../../images/presentation/portfolio.gif';

function Presentation() {
    
    return (
        <div className="px-24 bg-white py-14">
            <div className="flex justify-between text-3xl font-bold tracking-wider text-greyDark font-openSans">
                <div className="flex flex-col">
                    <span>RAMBINAISING</span>
                    <span>Dylan</span>
                </div>
                <span className="">PORTFOLIO</span>
            </div>
            
            <div className="relative flex flex-wrap justify-end">
                <img className="m-auto mb-20" src={portfolio} alt="" />
                <img className="absolute bottom-0 m-10 mx-20 " src={gobelins} alt="" />
            </div>

            <div className="border-b border-black"></div>

            

        </div>
    )
}

export default Presentation
