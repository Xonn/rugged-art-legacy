import React from 'react'
import illustration01 from '../../../images/presentation/illustrations/01.png';
import illustration02 from '../../../images/presentation/illustrations/02.png';
import illustration03 from '../../../images/presentation/illustrations/03.png';
import illustration03b from '../../../images/presentation/illustrations/03b.jpg';
import illustration04 from '../../../images/presentation/illustrations/04.png';
import portrait01 from '../../../images/presentation/illustrations/portrait_01.png';
import portrait02 from '../../../images/presentation/illustrations/portrait_02.gif';
import portrait03 from '../../../images/presentation/illustrations/portrait_03.png';
import Fade from 'react-reveal/Fade';
import { SRLWrapper } from "simple-react-lightbox";
import Title from '../components/Title';
import Smiley from '../components/Smiley';
import Gallery from '../components/Gallery';

const Illustrations = ({title, id}) => {
    return (
        <div className="w-full text-xl">
            <div className="container px-20 m-auto">
                <div className="flex justify-center">
                    <Title title={title} number={id} />
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
                            </SRLWrapper>
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
                            <Smiley cssClass="mt-64" />
                        </div>
                    </div>
                </div>
                <Fade delay="500">
                    <img className="m-10" src={illustration04} alt="" />
                </Fade>
                <Gallery type="portrait" wrapperClass="flex flex-wrap w-full" imageClass="w-1/5" />
                <div className="my-20 border-b border-black"></div>

                <div className="flex">
                    <div className="relative w-1/2 m-5">
                        <Fade delay="500">
                            <img className="w-full" src={portrait01} alt="" />
                        </Fade>
                        <Smiley cssClass="absolute right-10 bottom-10" />
                    </div>
                    <div className="w-1/2 m-5 mt-32">
                        <Fade delay="1000">
                            <img className="w-full" src={portrait02} alt="" />
                        </Fade>
                    </div>
                </div>
                <Fade delay="1000">
                    <img className="10" src={portrait03} alt="" />
                </Fade>

                <div className="z-50 my-32 border-b border-black"></div>
            </div>
            
            <div className="bg-greyLighter -mt-96">
                <Gallery type="insta" wrapperClass="container flex flex-wrap justify-center px-20 pt-56 pb-20 mx-auto" imageClass="w-1/3 p-5" />
            </div>
        </div>
    )
}

export default Illustrations
