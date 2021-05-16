import React from 'react'
import one from '../../../images/presentation/1.png';
import hello from '../../../images/presentation/introduction/hello.png';
import identity from '../../../images/presentation/introduction/identity.png';
import lines from '../../../images/presentation/introduction/identity_lines.png';
import pencil from '../../../images/presentation/introduction/identity_pencil.png';
import mockup from '../../../images/presentation/introduction/mockup_identity.png';
import portrait from '../../../images/presentation/introduction/portrait.png';

const Introduction = () => {
    return (
        <div>
            <div className="flex flex-row">
                <div className="w-1/2">
                    <img className="m-20 w-72" src={hello} alt="" />
                    <div className="w-2/3 m-auto text-xl">
                        <h2 className="relative flex items-center my-10 text-4xl font-bold uppercase">
                            <img className="absolute -left-32" src={one} alt="" />
                            À propos de moi
                        </h2>
                        <p className="my-10">Je m’appelle Dylan Rambinaising, graphiste & illustrateur freelance depuis 2015.
                            <b>Animé depuis petit par l’amour des arts,</b> j’ai grandi en me nourrissant de tout ce qui m’entourait.
                            <b>Toujours à la recherche de nouveaux défis,</b> je me considère comme un créatif compulsif qui vous invite à découvrir son univers sous l’alias de <b>Rugged*.</b>
                        </p>
                        <p className="text-third">*Ce pseudonyme signifie « robuste », traduction d’un style graphique construit à travers la recherche de mixité tant au niveau du support que de l’outil.</p>
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
        </div>
    )
}

export default Introduction
