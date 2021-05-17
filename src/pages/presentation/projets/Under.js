import React from 'react'
import five from '../../../images/presentation/5.png';
import u1 from '../../../images/presentation/under/01.png';
import u2 from '../../../images/presentation/under/02.png';
import u4b from '../../../images/presentation/under/04b.png';
import u5 from '../../../images/presentation/under/05.png';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

const Under = () => {
    return (
        <div className="m-10">
            <h2 className="relative flex items-center my-10 ml-40 text-4xl font-bold uppercase">
                <Flip opposite delay="700" duration="1500" left cascade>
                    <img className="absolute -left-32" src={five} alt="" />
                    Under
                </Flip>
            </h2>
            <div className="flex">
                <div className="w-1/2">
                    <Fade delay="500">
                        <img src={u1} alt="" />
                    </Fade>
                    <Fade delay="1000" left>
                        <p className="m-10">Directeur Artistique : Rugged <br /> Photographe : deCorban <br /> Calligraphe : Alpha Skao <br /> Modèle(s) : Léa Nozières,  Héloïse L-Martinez  Daytona <br /> Studio : Something Pink Studio</p>
                    </Fade>
                </div>
                <div className="w-1/2">
                    <Fade delay="800">
                        <img src={u2} alt="" />
                    </Fade>
                </div>
            </div>

            <Fade cascade delay="500">
                <img className="w-full my-10" src={u4b} alt="" />
                <img className="w-full" src={u5} alt="" />
            </Fade>
        </div>
    )
}

export default Under
