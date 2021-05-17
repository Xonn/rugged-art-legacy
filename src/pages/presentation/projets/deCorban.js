import React from 'react'
import seven from '../../../images/presentation/7.png';
import portrait from '../../../images/presentation/decorban/portrait.png';
import decorban from '../../../images/presentation/decorban/decorban.gif';
import d1 from '../../../images/presentation/decorban/01.png';
import d2 from '../../../images/presentation/decorban/02.png';
import d3 from '../../../images/presentation/decorban/03.png';
import d4 from '../../../images/presentation/decorban/04.png';
import d5 from '../../../images/presentation/decorban/05.png';
import d6 from '../../../images/presentation/decorban/06.png';
import d7 from '../../../images/presentation/decorban/07.png';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

const deCorban = () => {
    return (
        <div>
            <h2 className="relative flex items-center my-10 ml-40 text-4xl font-bold uppercase">
                <Flip opposite delay="700" duration="1500" left cascade>
                    <img className="absolute -left-32" src={seven} alt="" />
                    deCorban
                </Flip>
            </h2>

            <div className="flex flex-row my-20">
                <div className="relative w-1/3">
                    <Fade delay="500">
                        <img className="w-72" src={portrait} alt="" />
                        <img className="absolute w-56 -bottom-14 right-14" src={decorban} alt="" />
                    </Fade>
                </div>

                <Fade delay="1000">
                    <p className="w-1/3 m-10">Bienvenue chez deCorban. <br />
                    Poussez la porte de son monde... Un univers qui explore le corps nu, et ses reflets oniriques, romantiques, érotiques… Ici, vous entrez dans une autre sphère, laissez vous plonger dans une autre atmosphère : <b>Découvrez l’Eromantisme.</b> <br /> <br />Refonte complète du site : <span className="text-third">www.decorban.art</span></p>
                </Fade>
                <Fade delay="1000">
                    <p className="w-1/3 m-10">deCorban est un photographe basé en région parisienne reconnu pour son travail à caractère érotique autour du corps humain. <br /> <br /> Le projet a été réalisé en binôme avec un prestataire developpeur - je me suis occupé de la direction artistique du projet ainsi que du recrutement des ressources externes. Une charte graphique à été réalisée autour du rework de son logotype. <br /> <br /> Contribution : Bastien Soares <br /> <span className="text-third">developpeur back-end.</span></p>
                </Fade>
            </div>
            <div className="flex flex-wrap m-10 mt-40 space-y-10">
                <Fade left delay="500">
                    <img src={d1} alt="" className="w-1/3" />
                </Fade>
                <Fade top delay="500">
                    <img src={d2} alt="" className="w-1/3" />
                </Fade>
                <Fade right delay="500">
                    <img src={d3} alt="" className="w-1/3" />
                </Fade>
                <Fade cascade delay="500">
                    <img src={d4} alt="" className="w-full" />
                    <img src={d5} alt="" className="w-full" />
                    <img src={d6} alt="" className="w-full" />
                    <img src={d7} alt="" className="w-full" />
                </Fade>
            </div>
        </div>
    )
}

export default deCorban
