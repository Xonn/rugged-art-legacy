import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/footer/logo.png';
import facebook from '../../images/footer/bt_ft_scroll_facebook_no.svg';
import behance from '../../images/footer/bt_ft_scroll_behance_no.svg';
import instagram from '../../images/footer/bt_ft_scroll_instagram_no.svg';
import linkedin from '../../images/footer/bt_ft_scroll_linkedin_no.svg';
import twitter from '../../images/footer/bt_ft_scroll_twitter_no.svg';
import dribbble from '../../images/footer/bt_ft_scroll_dribbble_no.svg';
import etsy from '../../images/footer/bt_ft_scroll_etsy_no.svg';
import twitch from '../../images/footer/bt_ft_scroll_twitch_no.svg';

const socialNetwork = [
    {name: "Facebook", url: "https://www.facebook.com/ArtsbyRugged", image: facebook},
    {name: "Behance", url: "https://www.facebook.com/ArtsbyRugged", image: behance},
    {name: "Instagram", url: "https://www.facebook.com/ArtsbyRugged", image: instagram},
    {name: "LinkedIn", url: "https://www.facebook.com/ArtsbyRugged", image: linkedin},
    {name: "Twitter", url: "https://www.facebook.com/ArtsbyRugged", image: twitter},
    {name: "Dribbble", url: "https://www.facebook.com/ArtsbyRugged", image: dribbble},
    {name: "Etsy", url: "https://www.facebook.com/ArtsbyRugged", image: etsy},
    {name: "Twitch", url: "https://www.facebook.com/ArtsbyRugged", image: twitch},
];

const Index = ({routes}) => {
    return (
        <Footer>
            <div className="w-1/4 h-full m-auto">
                <img className="h-auto m-auto w-44" src={logo} alt="Logo"/>
            </div>
            <div className="flex flex-wrap w-2/4">
                <div className="flex justify-center w-full mb-10">
                {socialNetwork.map(sn => 
                    <a href={sn.url} rel="noreferrer" target="_blank">
                        <img className="w-16" src={sn.image} alt={sn.name}/>
                    </a>
                )}
                </div>
                <div className="w-full text-center">
                    <strong>Dylan RAMBINAISING</strong>
                    <p className="text-sm">© 2018 Rugged. Tous droits réservés*</p>
                </div>
            </div>
            <div className="w-1/4">
                <ul className="m-5 border-l border-grey">
                {routes.map(route => {
                    return route.external ?
                    <li className="leading-8">
                        <Link className="px-5 hover:text-greyLight" target="_blank" to={{pathname: route.path}}>{route.name}</Link>
                    </li>
                    :
                    <li className="leading-8">
                        <Link className="px-5 hover:text-greyLight" to={route.path}>{route.name}</Link>
                    </li>
                })}
                </ul>
            </div>
        </Footer>
    )
}

const Footer = ({children}) => (
    <footer className="flex flex-wrap p-3 mt-10 bg-greyDarker text-grey">{children}</footer>
);

export default Index
