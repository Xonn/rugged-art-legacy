import React from 'react'
import wave from '../../../images/presentation/wave.gif';
import thanks from '../../../images/presentation/thanks.gif';
import Fade from 'react-reveal/Fade';
import Title from '../components/Title';

const Conclusion = ({title, id}) => {
    return (
        <div className="container mx-auto">
            <Title title={title} number={id} cssClass="ml-36" />

            <div className="flex flex-wrap justify-center mt-32 space-y-40">
                <Fade delay="500">
                    <img src={wave} alt="" />
                    <img src={thanks} alt="" />
                </Fade>
            </div>
        </div>
    )
}

export default Conclusion
