import React from 'react';
import t1 from '../../../images/presentation/tsumi/01.png';
import t2 from '../../../images/presentation/tsumi/02.png';
import t3 from '../../../images/presentation/tsumi/03.png';
import t4 from '../../../images/presentation/tsumi/04.png';
import t5 from '../../../images/presentation/tsumi/05.gif';
import t6 from '../../../images/presentation/tsumi/06.png';
import Fade from 'react-reveal/Fade';
import Title from '../components/Title';

const Tsumi = ({title, id}) => {
    return (
        <div className="container mx-auto">
            <Title title={title} number={id} cssClass="ml-36" />

            <div className="flex flex-wrap justify-center -mt-40">
                <div className="relative flex flex-wrap justify-center">
                    <Fade delay="500">
                        <img className="my-10" src={t1} alt="" />
                    </Fade>
                    <div className="absolute left-0 w-3/5 -bottom-4">
                        <Fade delay="1000" left>
                        <p><b>Réalisation d’illustrations vectorielles*</b> inspirées de l’ère Edô du Japon. 
                        <b> Le Bushidō</b> regroupe 7 grandes vertus que les samourais devaient respecter.
                            Aujourd’hui, le Bushido est à l’origine de l’idéologie d’harmonie industrielle du Japon moderne.
                            Depuis fin 2020, ces illustrations appartiennent à la collection de la marque Franco-nippon <b>Tsumi 罪Clo.</b></p>
                            <br />
                            <p className="text-third">* + Multiples Illustrations réalisées sur l’univers du Bushido <br /> + Réalisation de 7 Typographies dont certaines en collaboration <br /> + Déclinaisons sur de nombreux supports : textiles, stickers</p>
                        </Fade>
                    </div>
                </div>
                    <Fade cascade delay="500">
                        <img className="my-10" src={t2} alt="" />
                        <img className="my-10" src={t3} alt="" />
                    </Fade>
                    <Fade delay="500">
                        <div className="relative">
                            <img className="my-10" src={t4} alt="" />
                            <img className="absolute right-0 my-10 transform -translate-x-1/2 -bottom-40 left-1/2 w-96" src={t5} alt="" />
                        </div>
                    </Fade>
                    <Fade cascade delay="500">
                        <img className="my-10 mt-36" src={t6} alt="" />
                    </Fade>
            </div>
        </div>
    )
}

export default Tsumi
