import React from 'react'
import u1 from '../../../images/presentation/under/01.png';
import u2 from '../../../images/presentation/under/02.png';
import u4b from '../../../images/presentation/under/04b.png';
import u5 from '../../../images/presentation/under/05.png';
import Fade from 'react-reveal/Fade';
import Title from '../components/Title';

const Under = ({title, id}) => {
    return (
        <div className="container mx-auto">
            <Title title={title} number={id} cssClass="ml-36" />
            <div className="flex justify-between">
                <div className="w-1/3">
                    <Fade delay="500">
                        <img src={u1} alt="" />
                    </Fade>
                    <Fade delay="1000" left>
                        <p className="m-10"><b>Directeur Artistique</b> : Rugged <br /> <b>Photographe</b> : deCorban <br /> <b>Calligraphe</b> : Alpha Skao <br /> <b>Modèle(s)</b> : Léa Nozières,  Héloïse L-Martinez  Daytona <br /> <b>Studio</b> : Something Pink Studio</p>
                    </Fade>
                </div>
                <div className="w-1/2">
                    <Fade delay="800">
                        <img className="w-full" src={u2} alt="" />
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
