import React from 'react'
import five from '../../../images/presentation/5.png';
import u1 from '../../../images/presentation/under/01.png';
import u2 from '../../../images/presentation/under/02.png';
import u3 from '../../../images/presentation/under/03.png';
import u4 from '../../../images/presentation/under/04.png';
import u4b from '../../../images/presentation/under/04b.png';
import u5 from '../../../images/presentation/under/05.png';

const Under = () => {
    return (
        <div className="m-10">
            <h2 className="relative flex items-center my-10 ml-40 text-4xl font-bold uppercase">
                <img className="absolute -left-32" src={five} alt="" />
                Under
            </h2>
            <div className="flex">
                <div className="w-1/2">
                    <img src={u1} alt="" />
                    <p className="m-10">Directeur Artistique : Rugged <br /> Photographe : deCorban <br /> Calligraphe : Alpha Skao <br /> Modèle(s) : Léa Nozières,  Héloïse L-Martinez  Daytona <br /> Studio : Something Pink Studio</p>
                </div>
                <div className="w-1/2">
                    <img src={u2} alt="" />
                </div>
            </div>

            <img className="w-full my-10" src={u4b} alt="" />
            <img className="w-full" src={u5} alt="" />
        </div>
    )
}

export default Under
