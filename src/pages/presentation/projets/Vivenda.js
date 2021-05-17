import React from 'react'
import six from '../../../images/presentation/6.png';
import v1 from '../../../images/presentation/vivenda/01.png';
import v2 from '../../../images/presentation/vivenda/02.png';
import v3 from '../../../images/presentation/vivenda/03.png';
import v4 from '../../../images/presentation/vivenda/04.png';
import v5 from '../../../images/presentation/vivenda/05.png';

const Vivenda = () => {
    return (
        <div className="m-10">
            <h2 className="relative flex items-center my-10 ml-40 text-4xl font-bold uppercase">
                <img className="absolute -left-32" src={six} alt="" />
                Vivenda - Les loges
            </h2>

            <div className="flex flex-col items-center justify-center space-y-10 ">
                <img className="" src={v1} alt="" />
                <img className="" src={v2} alt="" />
                <img className="" src={v3} alt="" />
                <img className="" src={v4} alt="" />
                <img className="" src={v5} alt="" />
            </div>
        </div>
    )
}

export default Vivenda
