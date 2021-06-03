import React from 'react'
import arrow from '../../../images/presentation/arrow.png';
import sommary from '../../../images/presentation/sommary.gif';
import Smiley from './Smiley'
import Slide from 'react-reveal/Slide';

const Sommary = ({projects}) => {
    return (
        <div className="relative flex items-center justify-end mr-20 ">
            <div className="w-1/2">
                <Smiley cssClass="absolute bottom-0 left-20" />
                <img className="w-full" src={sommary} alt="" />
            </div>

            <Slide right opposite cascade>
                <ul className="w-1/2">
                    {projects.map(project =>
                        <li className="relative my-2 border-b border-black">
                            <button className="my-1 text-4xl font-bold uppercase hover:text-third">{String(project.id).padStart(2, '0')}. {project.title}</button>
                            <img className="absolute right-0 bottom-2" src={arrow} alt="" />
                        </li>
                    )}
                </ul>
            </Slide>
        </div>
    )
}

export default Sommary
