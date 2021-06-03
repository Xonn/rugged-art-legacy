import React from 'react'
import smiley from '../../../images/presentation/smiley.gif';
import Pulse from 'react-reveal/Pulse';

const Smiley = ({cssClass}) => {
    return (
        <Pulse forever>
            <img className={cssClass} src={smiley} alt="" />
        </Pulse>
    )
}

export default Smiley
