import React from 'react';
import portfolioSVG from '../../images/portfolio.svg';
import image1 from '../../images/portfolio/bn_portf_01.png';
import image2 from '../../images/portfolio/bn_portf_01_1.png';
import image3 from '../../images/portfolio/bn_portf_01_2.png';
import image4 from '../../images/portfolio/bn_portf_02.png';
import image5 from '../../images/portfolio/bn_portf_02_1.png';
import image6 from '../../images/portfolio/bn_portf_04.png';
import image7 from '../../images/portfolio/bn_portf_04_01.png';
import LazyLoad from 'react-lazyload';

const projects = [
    { id: 1, image: image1, description: 'test' },
    { id: 2, image: image2, description: 'toto' },
    { id: 3, image: image3, description: 'tata' },
    { id: 4, image: image4, description: 'tata' },
    { id: 5, image: image5, description: 'tata' },
    { id: 6, image: image6, description: 'tata' },
    { id: 7, image: image7, description: 'tata' },
    { id: 8, image: image1, description: 'tata' },
    { id: 9, image: image2, description: 'tata' },
];

const Portfolio = ({dark}) => {
    if (dark) {
        document.body.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
    }

    return (
        <>
            <LazyLoad height={'100%'} once>
                <img className="w-3/4 p-10 m-auto md:w-1/2 xl:w-2/5" src={portfolioSVG} alt=""/>
            </LazyLoad>
            
            <div className="flex flex-wrap w-4/5 m-auto lg:w-3/4">
                {projects.map(project => (
                    <div className="relative w-1/2 p-3 mt-5 sm:w-1/2 md:w-1/3 lg:w-1/4">
                        <LazyLoad height={'100%'} once>
                            <span className="absolute flex justify-center m-auto text-5xl left-1/2 right-1/2 font-bebas -top-3 text-primary">0{project.id}</span>
                            <img className="w-full" src={project.image} alt=""></img>
                        </LazyLoad>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Portfolio
