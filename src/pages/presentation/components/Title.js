import React from 'react'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

const Title = ({title, number, cssClass}) => {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { 
            return (
                images[item.replace('./', '')] = r(item)
            )
        });
        return images;
    }

    const images = importAll(require.context('../../../images/presentation/numbers', false, /\.png/));

    return (
        <h2 className={`relative flex items-center mb-8 text-4xl font-bold uppercase ${cssClass}`}>
            <Fade duration="1500">
                <img className="absolute -left-32" src={images[number + '.png'].default} alt="" />
            </Fade>
            <Slide top opposite cascade>
                {title}
            </Slide>
        </h2>
    )
}

export default Title
