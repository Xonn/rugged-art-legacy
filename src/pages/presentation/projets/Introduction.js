import React from 'react'
import hello from '../../../images/presentation/introduction/hello.png';
import rugged from '../../../images/presentation/introduction/rugged.gif';
import identity from '../../../images/presentation/introduction/identity.png';
import mockup from '../../../images/presentation/introduction/mockup_identity.png';
import portrait from '../../../images/presentation/introduction/portrait.png';
import Fade from 'react-reveal/Fade';
import Title from '../components/Title';
import Smiley from '../components/Smiley';


const Introduction = ({title, id}) => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-row">
                <div className="w-1/2">
                    <Fade>
                        <img className="m-auto my-20 w-72" src={hello} alt="" />
                    </Fade>
                    <div className="w-2/3 m-auto text-xl">
                        <Title title={title} number={id} />
                        <Fade delay="1000" left>
                            <p className="my-10">Je m’appelle Dylan Rambinaising, graphiste & illustrateur freelance depuis 2015.
                                <b>Animé depuis petit par l’amour des arts,</b> j’ai grandi en me nourrissant de tout ce qui m’entourait.
                                <b>Toujours à la recherche de nouveaux défis,</b> je me considère comme un créatif compulsif qui vous invite à découvrir son univers sous l’alias de <b>Rugged*.</b>
                            </p>
                            <p className="text-third">*Ce pseudonyme signifie « robuste », traduction d’un style graphique construit à travers la recherche de mixité tant au niveau du support que de l’outil.</p>
                        </Fade>
                    </div>
                </div>
                <Fade delay="500">
                    <img className="w-1/2" src={portrait} alt="" />
                </Fade>
            </div>
            <div className="flex flex-row">
                <div className="w-1/2">
                    <Fade delay="1000">
                        <img src={mockup} alt="" />
                    </Fade>
                    <div className="flex flex-row justify-end w-full m-auto mt-14">
                        <Smiley cssClass="mr-28"/>
                    </div>
                </div>
                <div className="w-1/2">
                    <Fade delay="500">
                        <img className="z-20 w-5/6 m-auto -mt-40" src={rugged} alt="" />
                    </Fade>
                    <Fade delay="1000">
                        <img className="w-1/2 m-auto" src={identity} alt="" />
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Introduction
