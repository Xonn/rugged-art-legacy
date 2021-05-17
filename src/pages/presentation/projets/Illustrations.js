import React from 'react'
import two from '../../../images/presentation/2.png';
import illustration01 from '../../../images/presentation/illustrations/01.png';
import illustration02 from '../../../images/presentation/illustrations/02.png';
import illustration03 from '../../../images/presentation/illustrations/03.png';
import illustration03b from '../../../images/presentation/illustrations/03b.jpg';
import illustration04 from '../../../images/presentation/illustrations/04.png';
import portrait01 from '../../../images/presentation/illustrations/portrait_01.png';
import portrait02 from '../../../images/presentation/illustrations/portrait_02.gif';
import portrait03 from '../../../images/presentation/illustrations/portrait_03.png';
import smiley from '../../../images/presentation/smiley.gif';
import insta_01 from '../../../images/presentation/illustrations/insta/01.png';
import insta_02 from '../../../images/presentation/illustrations/insta/02.png';
import insta_03 from '../../../images/presentation/illustrations/insta/03.png';
import insta_03b from '../../../images/presentation/illustrations/insta/03b.jpg';
import insta_04 from '../../../images/presentation/illustrations/insta/04.png';
import insta_05 from '../../../images/presentation/illustrations/insta/05.png';
import insta_05b from '../../../images/presentation/illustrations/insta/05b.jpg';
import insta_06 from '../../../images/presentation/illustrations/insta/06.png';
import insta_06b from '../../../images/presentation/illustrations/insta/06b.jpg';
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
import p01 from '../../../images/presentation/illustrations/portrait/01.jpg';
import p02 from '../../../images/presentation/illustrations/portrait/02.jpg';
import p03 from '../../../images/presentation/illustrations/portrait/03.jpg';
import p04 from '../../../images/presentation/illustrations/portrait/04.jpg';
import p05 from '../../../images/presentation/illustrations/portrait/05.jpg';
import p06 from '../../../images/presentation/illustrations/portrait/06.jpg';
import p07 from '../../../images/presentation/illustrations/portrait/07.jpg';
import p08 from '../../../images/presentation/illustrations/portrait/08.jpg';
import p09 from '../../../images/presentation/illustrations/portrait/09.jpg';
import p10 from '../../../images/presentation/illustrations/portrait/10.jpg';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Zoom from 'react-reveal/Zoom';
import { SRLWrapper } from "simple-react-lightbox";

const Illustrations = () => {
    return (
        <div>
            <div className="flex justify-center">
                <h2 className="relative flex items-center my-10 text-4xl font-bold uppercase">
                    <Flip opposite delay="700" duration="1500" top cascade>
                        <img className="absolute -left-32" src={two} alt="" />
                        Illustration
                    </Flip>
                </h2>
            </div>
            <div className="flex">
                <div className="flex flex-wrap justify-end w-1/2 justify-items-end">
                    <Fade delay="500">
                        <img className="m-10" src={illustration01} alt="" />
                    </Fade>
                    <Fade delay="1500">
                        <SRLWrapper>
                            <a className="m-10" href={illustration03b}>
                                <img className="w-full" src={illustration03} alt="" />
                            </a>
                            {/* <img className="m-10" src={portrait03} alt="" /> */}
                        </SRLWrapper>
                        {/* <img className="m-10" src={illustration03} alt="" /> */}
                    </Fade>
                </div>
                <div className="w-1/2 m-10">
                    <Fade delay="1000" right>
                        <p><b>À main levée, réalisation d'une soixantaine de croquis</b> de visages d’individus que je côtoie, que j’ai croisé, que j’aime, que je ne reverrai peut-être jamais.
                            J’ai voulu par un trait assez violent et énergique, marquer <b>la fugacité d’un instant,</b> celui où le regard se pose sur une expression, une grimace, un sourire.
                        </p>
                        <br />
                        <p className="text-third">* + Sélection sur plus de 60 croquis réalisés entre 2015 et 2019 <br /> + Un seul outil utilisé : Bic noir dont certains en temps limités</p>
                    </Fade>
                    <Fade delay="1000">
                        <img className="m-10" src={illustration02} alt="" />
                    </Fade>
                    <div className="flex items-end justify-center">
                        <Pulse forever>
                            <img className="mt-64" src={smiley} alt="" />
                        </Pulse>
                    </div>
                </div>
            </div>
            <Fade delay="500">
                <img className="m-10" src={illustration04} alt="" />
            </Fade>
            <Zoom cascade>
                <div className="flex flex-wrap w-full">
                    <img className="w-1/5" src={p01} alt="" />
                    <img className="w-1/5" src={p02} alt="" />
                    <img className="w-1/5" src={p03} alt="" />
                    <img className="w-1/5" src={p04} alt="" />
                    <img className="w-1/5" src={p05} alt="" />
                    <img className="w-1/5" src={p06} alt="" />
                    <img className="w-1/5" src={p07} alt="" />
                    <img className="w-1/5" src={p08} alt="" />
                    <img className="w-1/5" src={p09} alt="" />
                    <img className="w-1/5" src={p10} alt="" />
                </div>
            </Zoom>
            <div className="my-20 border-b border-black"></div>

            <div className="flex">
                <div className="relative w-1/2 m-5">
                    <Fade delay="500">
                        <img className="w-full" src={portrait01} alt="" />
                    </Fade>
                    <Pulse forever>
                        <img className="absolute right-10 bottom-10" src={smiley} alt="" />
                    </Pulse>
                </div>
                <div className="w-1/2 m-5 mt-32">
                    <Fade delay="1000">
                        <img className="w-full" src={portrait02} alt="" />
                    </Fade>
                </div>
            </div>
            <Fade delay="1000">
                <img className="m-10" src={portrait03} alt="" />
            </Fade>

            <div className="z-50 my-32 border-b border-black"></div>

            <div className="bg-greyLighter -mx-52 -mt-96">
                <Zoom cascade>
                <SRLWrapper>
                    <div className="container flex flex-wrap justify-center px-20 pt-56 mx-auto">
                        <img className="w-1/3 p-5" src={insta_01} alt="" />
                        <img className="w-1/3 p-5" src={insta_02} alt="" />
                        <a className="w-1/3 p-5" href={insta_03b}>
                            <img className="w-full" src={insta_03} alt="" />
                        </a>
                        <img className="w-1/3 p-5" src={insta_04} alt="" />
                        <a className="w-1/3 p-5" href={insta_05b}>
                            <img className="w-full" src={insta_05} alt="" />
                        </a>
                        <a className="w-1/3 p-5" href={insta_06b}>
                            <img className="w-full" src={insta_06} alt="" />
                        </a>
                        <img className="w-1/3 p-5" src={insta_07} alt="" />
                        <img className="w-1/3 p-5" src={insta_08} alt="" />
                        <img className="w-1/3 p-5" src={insta_09} alt="" />
                        <img className="w-1/3 p-5" src={insta_10} alt="" />
                        <img className="w-1/3 p-5" src={insta_11} alt="" />
                        <img className="w-1/3 p-5" src={insta_12} alt="" />
                        <img className="w-1/3 p-5" src={insta_13} alt="" />
                        <img className="w-1/3 p-5" src={insta_14} alt="" />
                        <img className="w-1/3 p-5" src={insta_15} alt="" />
                        <img className="w-1/3 p-5" src={insta_16} alt="" />
                        <img className="w-1/3 p-5" src={insta_17} alt="" />
                        <img className="w-1/3 p-5" src={insta_18} alt="" />
                    </div>
                    </SRLWrapper>
                </Zoom>
            </div>
        </div>
    )
}

export default Illustrations
