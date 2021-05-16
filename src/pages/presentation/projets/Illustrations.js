import React from 'react'
import two from '../../../images/presentation/2.png';
import illustration01 from '../../../images/presentation/illustrations/01.png';
import illustration02 from '../../../images/presentation/illustrations/02.png';
import illustration03 from '../../../images/presentation/illustrations/03.png';
import illustration04 from '../../../images/presentation/illustrations/04.png';
import portrait01 from '../../../images/presentation/illustrations/portrait_01.png';
import portrait02 from '../../../images/presentation/illustrations/portrait_02.gif';
import portrait03 from '../../../images/presentation/illustrations/portrait_03.png';
import pencil from '../../../images/presentation/illustrations/pencil.png';
import train from '../../../images/presentation/illustrations/train.png';
import insta_01 from '../../../images/presentation/illustrations/insta/01.png';
import insta_02 from '../../../images/presentation/illustrations/insta/02.png';
import insta_03 from '../../../images/presentation/illustrations/insta/03.png';
import insta_04 from '../../../images/presentation/illustrations/insta/04.png';
import insta_05 from '../../../images/presentation/illustrations/insta/05.png';
import insta_06 from '../../../images/presentation/illustrations/insta/06.png';
import insta_07 from '../../../images/presentation/illustrations/insta/07.png';
import insta_08 from '../../../images/presentation/illustrations/insta/08.png';
import insta_09 from '../../../images/presentation/illustrations/insta/09.png';
import insta_10 from '../../../images/presentation/illustrations/insta/10.png';
import insta_11 from '../../../images/presentation/illustrations/insta/11.png';
import insta_12 from '../../../images/presentation/illustrations/insta/12.png';
import insta_13 from '../../../images/presentation/illustrations/insta/13.png';
import insta_14 from '../../../images/presentation/illustrations/insta/14.png';
import insta_15 from '../../../images/presentation/illustrations/insta/15.png';
import insta_16 from '../../../images/presentation/illustrations/insta/16.png';
import insta_17 from '../../../images/presentation/illustrations/insta/17.png';
import insta_18 from '../../../images/presentation/illustrations/insta/18.png';

const Illustrations = () => {
    return (
        <div>
            <div className="flex justify-center">
                <h2 className="relative flex items-center my-10 text-4xl font-bold uppercase">
                    <img className="absolute -left-32" src={two} alt="" />
                    Illustration
                </h2>
            </div>
            <div className="flex">
                <div className="flex flex-wrap justify-end w-1/2 justify-items-end">
                    <img className="m-10" src={illustration01} alt="" />
                    <img className="m-10" src={illustration03} alt="" />
                </div>
                <div className="w-1/2 mt-10">
                    <p>À main levée, réalisation d'une soixantaine de croquis de visages d’individus que je côtoie, que j’ai croisé, que j’aime, que je ne reverrai peut-être jamais.
                        J’ai voulu par un trait assez violent et énergique, marquer la fugacité d’un instant, celui où le regard se pose sur une expression, une grimace, un sourire.
                    </p>
                    <p className="text-third">* + Sélection sur plus de 60 croquis réalisés entre 2015 et 2019 + Un seul outil utilisé : Bic noir dont certains en temps limités</p>
                    <img className="m-10" src={illustration02} alt="" />
                    <div className="flex items-center justify-center mt-40">
                        <img className="m-10" src={pencil} alt="" />
                        <img className="m-10" src={train} alt="" />
                    </div>
                </div>
            </div>
            
            <img className="m-10" src={illustration04} alt="" />
            
            <div className="my-20 border-b border-black"></div>

            <div className="flex ">
                <img className="w-1/2 m-5 mb-44" src={portrait01} alt="" />
                <img className="w-1/2 m-5 mt-44" src={portrait02} alt="" />
            </div>

            <img className="m-10" src={portrait03} alt="" />

            <div className="z-50 my-32 border-b border-black"></div>

            <div className="bg-greyLighter -mx-96 -mt-96">
                <div className="container flex flex-wrap justify-center px-20 pt-56 mx-auto">
                    <img className="m-5 w-80" src={insta_01} alt="" />
                    <img className="m-5 w-80" src={insta_02} alt="" />
                    <img className="m-5 w-80" src={insta_03} alt="" />
                    <img className="m-5 w-80" src={insta_04} alt="" />
                    <img className="m-5 w-80" src={insta_05} alt="" />
                    <img className="m-5 w-80" src={insta_06} alt="" />
                    <img className="m-5 w-80" src={insta_07} alt="" />
                    <img className="m-5 w-80" src={insta_08} alt="" />
                    <img className="m-5 w-80" src={insta_09} alt="" />
                    <img className="m-5 w-80" src={insta_10} alt="" />
                    <img className="m-5 w-80" src={insta_11} alt="" />
                    <img className="m-5 w-80" src={insta_12} alt="" />
                    <img className="m-5 w-80" src={insta_13} alt="" />
                    <img className="m-5 w-80" src={insta_14} alt="" />
                    <img className="m-5 w-80" src={insta_15} alt="" />
                    <img className="m-5 w-80" src={insta_16} alt="" />
                    <img className="m-5 w-80" src={insta_17} alt="" />
                    <img className="m-5 w-80" src={insta_18} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Illustrations
