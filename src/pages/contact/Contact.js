import React from 'react'
import {socialNetwork} from '../../data/socialNetwork';
import contact from '../../images/contact.svg';
import LazyLoad from 'react-lazyload';

const Contact = ({dark}) => {
    if (dark) {
        document.body.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
    }

    return (
        <div className="flex flex-wrap w-4/5 m-auto">
            <div className="w-full m-10">
                <LazyLoad height={'100%'} once>
                    <img className="w-1/2" src={contact} alt=""/>
                </LazyLoad>
            </div>
            <div className="flex justify-center w-1/2 border-r-2 border-grey">
                <span className="mr-2 text-xl text-grey font-openSans">Social :</span>
                <div className="flex flex-col flex-wrap">
                    {socialNetwork.map(sn => 
                        <a href={sn.url} className="text-3xl font-bebas text-greyDarker">{sn.name}</a>
                    )}
                </div>
            </div>

            <form className="w-2/5 p-8 m-auto space-y-10 font-futura">
                <div className="flex justify-center">
                    <button className="px-3 py-1 m-3 font-futura bg-greyDarker text-greyLighter ">Lire mon cv !</button>
                    <button className="px-3 py-1 m-3 font-futura bg-greyDarker text-greyLighter">Découvrir mon book</button>
                </div>
                {/* <h2 className="text-2xl font-bold text-center">Login</h2> */}
                <div className="relative border-b border-grey focus-within:border-secondary">
                    <input type="text" name="name" placeholder=" " className="block w-full bg-transparent appearance-none focus:outline-none" />
                    <label for="name" className="absolute top-0 uppercase duration-300 origin-0 text-grey">Nom</label>
                </div>
                <div className="relative border-b border-grey focus-within:border-secondary">
                    <input type="tel" name="phone" placeholder=" " className="block w-full bg-transparent appearance-none focus:outline-none" />
                    <label for="phone" className="absolute top-0 uppercase duration-300 origin-0 text-grey">Téléphone</label>
                </div>
                <div className="relative border-b border-grey focus-within:border-secondary">
                    <input type="text" name="email" placeholder=" " className="block w-full bg-transparent appearance-none focus:outline-none" />
                    <label for="email" className="absolute top-0 uppercase duration-300 origin-0 text-grey">Email</label>
                </div>
                <div className="relative border-b border-grey focus-within:border-secondary">
                    <input type="text" name="message" placeholder=" " className="block w-full bg-transparent appearance-none focus:outline-none" />
                    <label for="message" className="absolute top-0 uppercase duration-300 origin-0 text-grey">Message</label>
                </div>
            </form>

        </div>
    )
}

export default Contact
