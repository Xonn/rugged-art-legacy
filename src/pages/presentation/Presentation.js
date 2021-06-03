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
import Conclusion from './projets/Conclusion';
import Sommary from './components/Sommary';

function Presentation() {
    document.title = "Gobelins - Présentation";

    const projects = [
        {id: 1, title: "À propos de moi", component: Introduction},
        {id: 2, title: "Illutrations", component: Illustrations},
        {id: 3, title: "Air France", component: AirFrance},
        {id: 4, title: "Expo Entrepreneurs", component: ExpoEntrepreneurs},
        {id: 5, title: "Under", component: Under},
        {id: 6, title: "Vivenda - Les Loges", component: Vivenda},
        {id: 7, title: "deCorban", component: Decorban},
        {id: 8, title: "Tsumi", component: Tsumi},
        {id: 9, title: "Xavier Blondeau", component: XavierBlondeau},
        {id: 10, title: "Conclusion", component: Conclusion},
    ];

    return (
        <div className="bg-white py-14">
            <div className="container px-20 m-auto">
                <div className="flex justify-between text-4xl font-bold text-greyDark font-openSans">
                    <div className="flex flex-col tracking-lg">
                        <span>RAMBINAISING</span>
                        <span>Dylan</span>
                    </div>
                    <span className="tracking-xl">PORTFOLIO</span>
                </div>
                
                <div className="relative flex flex-wrap items-center justify-end h-full justify-items-center">
                    <img className="m-auto mb-20" src={portfolio} alt="" />
                    <img className="absolute bottom-0 my-10" src={gobelins} alt="" />
                </div>

                <div className="my-20 mt-56 border-b border-black"></div>
                <Sommary projects={projects} />
                <div className="my-20 border-b border-black"></div>
            </div>
            {projects.map((project, index) => {
                
                if (index !== 0) {
                    return ( 
                        <>
                            <div className="container mx-auto my-20 border-b border-black"></div>
                            <project.component title={project.title} id={project.id} />
                        </>
                    )
                }
                return <project.component title={project.title} id={project.id} />
                }
            )}
        </div>
    )
}

export default Presentation
