import React from 'react'
import v1 from '../../../images/presentation/vivenda/01.png';
import v2 from '../../../images/presentation/vivenda/02.png';
import v3 from '../../../images/presentation/vivenda/03.png';
import v4 from '../../../images/presentation/vivenda/04.png';
import v5 from '../../../images/presentation/vivenda/05.png';
import Fade from 'react-reveal/Fade';
import Title from '../components/Title';

const Vivenda = ({title, id}) => {
    return (
        <div className="container mx-auto">
            <Title title={title} number={id} cssClass="ml-32" />

            <div className="flex flex-col items-center justify-center space-y-10 ">
                <Fade cascade delay="500">
                    <img className="" src={v1} alt="" />
                    <img className="" src={v2} alt="" />
                    <img className="" src={v3} alt="" />
                    <img className="" src={v4} alt="" />
                    <img className="" src={v5} alt="" />
                </Fade>
            </div>
        </div>
    )
}

export default Vivenda
