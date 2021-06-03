import React from 'react'
import Zoom from 'react-reveal/Zoom';
import { SRLWrapper } from 'simple-react-lightbox';

const Gallery = ({type, wrapperClass, imageClass}) => {
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { 
            return (
                images[item.replace('./', '')] = r(item)
            )
        });
        return images;
    }

    let images, imagesBig;
    switch (type) {
        case 'insta':
                images = importAll(require.context('../../../images/presentation/illustrations/insta', false));
                imagesBig = importAll(require.context('../../../images/presentation/illustrations/insta/big', false));
            break;
        case 'portrait':
                images = importAll(require.context('../../../images/presentation/illustrations/portrait', false));
                imagesBig = importAll(require.context('../../../images/presentation/illustrations/portrait/big', false));
            break;
        default:
                images = importAll(require.context('../../../images/presentation/illustrations', false));
    }

    function getBigImage(imageName) {

        return imagesBig[imageName] !== undefined ? imagesBig[imageName].default : images[imageName].default;
    }

    return (
        <Zoom cascade duration="1500">
            <SRLWrapper>
                <div className={wrapperClass}>
                    {Object.entries(images).map(image => {
                        return <a className={imageClass} href={getBigImage(image[0])}>
                                    <img className="w-full" src={image[1].default} alt="" />
                                </a>
                        }
                    )}
                </div>
            </SRLWrapper>
        </Zoom>
    )
}

export default Gallery
