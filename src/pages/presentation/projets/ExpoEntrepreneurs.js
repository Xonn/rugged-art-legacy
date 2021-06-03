import React from 'react'
import logo from '../../../images/presentation/expoentrepreneurs/logo.png';
import ee1 from '../../../images/presentation/expoentrepreneurs/01.png';
import ee2 from '../../../images/presentation/expoentrepreneurs/02.png';
import ee3 from '../../../images/presentation/expoentrepreneurs/03.png';
import ee4 from '../../../images/presentation/expoentrepreneurs/04.png';
import ee5 from '../../../images/presentation/expoentrepreneurs/05.png';
import ee6 from '../../../images/presentation/expoentrepreneurs/06.png';
import Fade from 'react-reveal/Fade';
import Title from '../components/Title';

const ExpoEntrepreneurs = ({title, id}) => {
    return (
        <div className="container mx-auto">
            <Title title={title} number={id} cssClass="ml-36" />

            <div className="flex justify-center mb-10">
                <div className="w-2/5 m-16">
                    <Fade delay="500">
                        <img className="mb-16" src={logo} alt="" />
                    </Fade>
                    <div className="w-full">
                        <Fade delay="1000" left>
                            <p>Expo Entrepreneurs est un événement qui se tient annuellement, à Montréal.
                            Créée pour «inspirer, connecter et solutionner» cette initiative a pour vocation première de rassembler l’écosystème entrepreneurial du Québec.
                            J’ai été en charge de repenser la totalité de l’image de marque pour l’événement de 2021.
                            Une toute nouvelle identité, charte graphique et autres visuels publicitaires pour un événement qui se veut hybride et innovateur face à la crise sanitaire actuelle.
                            </p>

                            <br />
                            <p className="text-third">* + Création d’un branding 360° - <br /> &nbsp;&nbsp;&nbsp;- logo, site web, illustrations, charte graphique etc... <br /> + Stratégie Créative en permanence</p>
                        </Fade>
                    </div>
                </div>
                <Fade delay="800">
                    <img className="w-3/5 m-5" src={ee1} alt="" />
                </Fade>
            </div>

            <div className="flex flex-wrap justify-center">
                <Fade cascade delay="500">
                    <img className="my-10" src={ee2} alt="" />
                    <img className="my-10" src={ee3} alt="" />
                    <img className="my-10" src={ee4} alt="" />
                    <img className="my-10" src={ee5} alt="" />
                    <img className="my-10" src={ee6} alt="" />
                </Fade>
            </div>
        </div>
    )
}

export default ExpoEntrepreneurs
