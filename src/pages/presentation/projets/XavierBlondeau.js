import React from 'react'
import nine from '../../../images/presentation/9.png';
import x1 from '../../../images/presentation/xavierb/01.png';
import x2 from '../../../images/presentation/xavierb/02.png';
import x3 from '../../../images/presentation/xavierb/03.png';
import x4 from '../../../images/presentation/xavierb/04.png';
import x5 from '../../../images/presentation/xavierb/05.png';
import x6 from '../../../images/presentation/xavierb/06.png';
import x7 from '../../../images/presentation/xavierb/07.png';
import x8 from '../../../images/presentation/xavierb/08.png';

const XavierBlondeau = () => {
    return (
        <div>
            <h2 className="relative flex items-center my-10 text-4xl font-bold uppercase ml-44">
                <img className="absolute -left-32" src={nine} alt="" />
                Xavier Blondeau
            </h2>

        <div className="flex flex-wrap space-x-10 space-y-10">
            <img src={x1} alt="" />
            <div className="flex flex-row">
                <p className="w-1/3 m-16"><b>Refonte de l’identité visuelle*</b><br /> du photographe <b>Xavier Blondeau.</b> <br /> <br /> Réalisation du monogramme épuré, mathématique, logique, un retour à l’élémentaire dans une société de plus en plus superficielle et pleine de fioritures. Le contour rappelle l’objectif du photographe, les limites et les frontières de son travail. Il délimite le logo dans un espace qui le fait se suffire à lui-même. <br /> <br /> <span className="text-third"> * + Création du logotype et de sa charte graphique <br /> + Confection de deux objets éditoriaux <br /> + Réalisation de deux affiches d’expositions</span></p>
                <div className="w-1/3">
                    <img className="w-" src={x2} alt="" />
                </div>
            </div>
            <img src={x3} alt="" />
            <img src={x4} alt="" />
            <img src={x5} alt="" />
            <img src={x6} alt="" />
            <img src={x7} alt="" />
            <img src={x8} alt="" />
        </div>
        </div>
    )
}

export default XavierBlondeau
