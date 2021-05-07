import React from 'react';
import SwiperCore, { Navigation,Lazy,Autoplay,EffectFade } from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import image1 from '../../images/carousel/bn_home_01_1.png';
import image2 from '../../images/carousel/bn_home_01_2.png';
import image3 from '../../images/carousel/bn_home_02.png';
import image4 from '../../images/carousel/bn_home_04.png';
import image5 from '../../images/carousel/bn_home_06.png';
import previousArrow from '../../images/carousel/previousArrow.svg';
import nextArrow from '../../images/carousel/nextArrow.svg';
import first from '../../images/home/bt_home_first.png';
import second from '../../images/home/bt_home_second.png';
import third from '../../images/home/bt_home_third.png';
import LazyLoad from 'react-lazyload';

SwiperCore.use([Navigation,Lazy,Autoplay,EffectFade])

function NextArrow() {
    return (
        <div className="absolute z-10 hidden w-8 next-arrow md:block right-1 top-1/2">
            <img src={nextArrow} alt="Slide suivante"/>
        </div>
    );
}

function PrevArrow() {
    return (
        <div className="absolute z-10 hidden w-8 previous-arrow md:block left-1 top-1/2">
            <img src={previousArrow} alt="Slide précédente"/>
        </div>
    );
}

const Homepage = ({dark}) => {
    if (dark) {
        document.body.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
    }

    const banners = [
        {id: 1, image: image1, title: "toto"},
        {id: 2, image: image2, title: "toto"},
        {id: 3, image: image3, title: "toto"},
        {id: 4, image: image4, title: "toto"},
        {id: 5, image: image5, title: "toto"},
    ];
    const swiper = {
        slidesPerView: 1,
        effect: 'fade',
        autoplay: {delay: 3000},
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: '.next-arrow',
            prevEl: '.previous-arrow'
        }
    }
    return (
        <>
            <Swiper
            {...swiper}
            className="w-full md:w-5/6 xl:w-3/4"
            >
                {banners.map(banner =>     
                    <SwiperSlide>
                        <LazyLoad height={'100%'} once>
                            <img className="w-full px-3 py-6 overflow-hidden bg-cover md:p-12" src={banner.image} alt={banner.title}/>
                            <span className="absolute flex justify-center m-auto text-6xl -bottom-2.5 md:-bottom-6 md:text-9xl left-1/2 right-1/2 font-bebas text-primary">0{banner.id}</span>
                        </LazyLoad>
                    </SwiperSlide>
                )}
                <PrevArrow />
                <NextArrow />
            </Swiper>

            <div className="flex flex-wrap items-center justify-center w-full m-auto my-12 text-sm text-center text-white md:w-5/6 font-futura">
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <img className="m-auto my-5 w-14 md:w-16" src={first} alt=""/>
                    <p>À travers un Brief Client*, discernons ensemble<br/> la meilleure conception graphique personnalisée<br/> qui identifiera vos objectifs, votre philosophie<br/> et vos valeurs fondamentales.</p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <img className="m-auto my-5 w-14 md:w-16" src={second} alt=""/>
                    <p>J’apporte mon expertise et ma créativité afin de<br/> vous donner des solutions sur-mesure pour vos<br/> projets. Vous fournir un service et un suivi très<br/> personnel, dédié et pratique.</p>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <img className="m-auto my-5 w-14 md:w-16" src={third} alt=""/>
                    <p>Graphiste 360° au sens du détails aiguisés,<br/> si votre projet touche à du branding, du web,<br/> de la vidéo ou à l’image, mes compétences<br/> et ma polyvalence sont à votre disposition !</p>
                </div>
            </div>
        </>
    )
}

export default Homepage
