import React from 'react'
import x1 from '../../../images/presentation/xavierb/01.png';
import x2 from '../../../images/presentation/xavierb/02.png';
import x3 from '../../../images/presentation/xavierb/03.png';
import x4 from '../../../images/presentation/xavierb/04.png';
import x5 from '../../../images/presentation/xavierb/05.png';
import x6 from '../../../images/presentation/xavierb/06.png';
import x7 from '../../../images/presentation/xavierb/07.png';
import x8 from '../../../images/presentation/xavierb/08.png';
import Fade from 'react-reveal/Fade';
import Title from '../components/Title';

const XavierBlondeau = ({title, id}) => {
    return (
        <div className="container mx-auto">
            <Title title={title} number={id} cssClass="ml-36" />

            <div className="flex flex-wrap space-x-10 space-y-10">
                <Fade delay="500">
                    <img src={x1} alt="" />
                </Fade>
                <div className="flex flex-row items-center justify-center">
                    <Fade delay="1000" left>
                        <p className="w-1/3 m-16"><b>Refonte de l’identité visuelle*</b><br /> du photographe <b>Xavier Blondeau.</b> <br /> <br /> Réalisation du monogramme épuré, mathématique, logique, un retour à l’élémentaire dans une société de plus en plus superficielle et pleine de fioritures. Le contour rappelle l’objectif du photographe, les limites et les frontières de son travail. Il délimite le logo dans un espace qui le fait se suffire à lui-même. <br /> <br /> 
                        <span className="text-third"> * + Création du logotype et de sa charte graphique <br /> + Confection de deux objets éditoriaux <br /> + Réalisation de deux affiches d’expositions</span></p>
                    </Fade>
                    <div className="w-1/3">
                        <Fade delay="800">
                            <img className="w-" src={x2} alt="" />
                        </Fade>
                    </div>
                </div>
                <Fade cascade delay="500">
                    <img src={x3} alt="" />
                    <img src={x4} alt="" />
                    <img src={x5} alt="" />
                    <img src={x6} alt="" />
                    <img src={x7} alt="" />
                    <img src={x8} alt="" />
                </Fade>
            </div>
        </div>
    )
}

export default XavierBlondeau
