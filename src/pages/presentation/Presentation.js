import React from 'react'
import gobelins from '../../images/presentation/gobelins.png';
import hello from '../../images/presentation/hello.png';
import identity from '../../images/presentation/identity.png';
import lines from '../../images/presentation/identity_lines.png';
import pencil from '../../images/presentation/identity_pencil.png';
import mockup from '../../images/presentation/mockup_identity.png';
import portrait from '../../images/presentation/portrait.png';
import portfolio from '../../images/presentation/portfolio.gif';
import one from '../../images/presentation/1.png';

function Presentation() {
    
    return (
        <div className="container m-auto bg-white py-14">
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

            <div className="border-b border-black"></div>

            <div className="flex flex-row">
                <div className="w-1/2">
                    <img className="m-20 w-72" src={hello} alt="" />
                    <div className="w-3/5 m-auto text-xl">
                        <div className="relative flex flex-row items-center">
                            <img className="absolute -left-32" src={one} alt="" />
                            <h2 className="my-10 text-4xl font-bold uppercase">À propos de moi</h2>
                        </div>
                        <p className="my-10">Je m’appelle Dylan Rambinaising, graphiste & illustrateur freelance depuis 2015.
                            <b>Animé depuis petit par l’amour des arts,</b> j’ai grandi en me nourrissant de tout ce qui m’entourait.
                            <b>Toujours à la recherche de nouveaux défis,</b> je me considère comme un créatif compulsif qui vous invite à découvrir son univers sous l’alias de <b>Rugged*.</b>
                        </p>
                        <p className="text-green-700">*Ce pseudonyme signifie « robuste », traduction d’un style graphique construit à travers la recherche de mixité tant au niveau du support que de l’outil.</p>
                    </div>
                </div>
                <img className="w-1/2" src={portrait} alt="" />
            </div>
            <div className="flex flex-row">
                <div className="w-1/2">
                    <img src={mockup} alt="" />
                    <div className="flex flex-row justify-center w-full m-auto my-10">
                        <img className="mx-10" src={pencil} alt="" />
                        <img className="mx-10" src={lines} alt="" />
                    </div>
                </div>
                <div className="w-1/2">
                    <img className="w-1/2 m-auto" src={identity} alt="" />
                </div>
            </div>
            
            <div className="border-b border-black"></div>

        </div>
    )
}

export default Presentation
