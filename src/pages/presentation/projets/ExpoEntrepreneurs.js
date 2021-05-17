import React from 'react'
import four from '../../../images/presentation/4.png';
import logo from '../../../images/presentation/expoentrepreneurs/logo.png';
import ee1 from '../../../images/presentation/expoentrepreneurs/01.png';
import ee2 from '../../../images/presentation/expoentrepreneurs/02.png';
import ee3 from '../../../images/presentation/expoentrepreneurs/03.png';
import ee4 from '../../../images/presentation/expoentrepreneurs/04.png';
import ee5 from '../../../images/presentation/expoentrepreneurs/05.png';
import ee6 from '../../../images/presentation/expoentrepreneurs/06.png';

const ExpoEntrepreneurs = () => {
    return (
        <div className="m-10">
            <h2 className="relative flex items-center my-10 text-4xl font-bold uppercase ml-60">
                <img className="absolute -left-32" src={four} alt="" />
                Expo entrepreneurs
            </h2>

            <div className="flex justify-center mb-10">
                <div className="w-2/5 m-20">
                    <img className="mb-16" src={logo} alt="" />
                    <div className="w-11/12">
                        <p>Expo Entrepreneurs est un événement qui se tient annuellement, à Montréal.
                        Créée pour «inspirer, connecter et solutionner» cette initiative a pour vocation première de rassembler l’écosystème entrepreneurial du Québec.
                        J’ai été en charge de repenser la totalité de l’image de marque pour l’événement de 2021.
                        Une toute nouvelle identité, charte graphique et autres visuels publicitaires pour un événement qui se veut hybride et innovateur face à la crise sanitaire actuelle.
                        </p>

                        <br />
                        <p className="font-bold text-third">* + Création d’un branding 360° - <br /> &nbsp;&nbsp;&nbsp;- logo, site web, illustrations, charte graphique etc... <br /> + Stratégie Créative en permanence</p>
                    </div>
                </div>
                <img className="w-3/5 m-5" src={ee1} alt="" />
            </div>

            <div className="flex flex-wrap justify-center">

                <img className="my-10" src={ee2} alt="" />
                <img className="my-10" src={ee3} alt="" />
                <img className="my-10" src={ee4} alt="" />
                <img className="my-10" src={ee5} alt="" />
                <img className="my-10" src={ee6} alt="" />
            </div>
        </div>
    )
}

export default ExpoEntrepreneurs
