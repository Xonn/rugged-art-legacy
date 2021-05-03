import React, {useState} from 'react';
// import { NavLink } from 'react-router-dom';
import portrait from '../../images/about/introduction/portrait.png';
import hello from '../../images/about/introduction/pt_intro_hello.svg';
import particle from '../../images/about/introduction/pt_intro_photo_purple.svg';
import job from '../../images/about/experiences/pt_exp_job.svg';
import school from '../../images/about/experiences/pt_exp_school.svg';
import japan from '../../images/about/interest/interest_jp_tori.svg';
import dance from '../../images/about/interest/interest_danse.svg';
import graphic from '../../images/about/interest/interest_graphic.svg';
import travel from '../../images/about/interest/interest_travel.svg';
import game from '../../images/about/interest/interest_game.svg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

const interests = [
    { name: "Culture Japonaise", image: japan, description: "Mon amour pour la culture du pays au soleil levant ne s’arrête pas uniquement aux mangas ou aux animés. <b>Le Japon</b> est un pays qui m’a toujours fasciné, avant même d’avoir la chance d’y aller. L’harmonie entre tradition et modernisme, la richesse de ses folklores font que ce pays ne cesse de m’inspirer." },
    { name: "Danse", image: dance, description: "Quisque quis ornare est. Nam dignissim sollicitudin nibh et commodo. Proin semper justo id libero accumsan faucibus. Donec non massa pellentesque, venenatis ligula quis, porta tortor. Vestibulum eu lobortis est, non egestas libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus tincidunt est leo, sit amet dignissim ipsum sagittis eget. Integer eu aliquam eros." },
    { name: "Street Art", image: graphic, description: "Sed at erat porttitor, tempus leo ac, semper risus. Ut id feugiat odio. Phasellus sed mauris eleifend, varius nulla ut, sagittis enim. Cras at consectetur turpis. Praesent eu tortor porttitor, interdum magna in, pretium nulla. Integer suscipit turpis turpis, volutpat fermentum velit auctor vitae. Maecenas a blandit odio." },
    { name: "Voyages", image: travel, description: "Pellentesque vel lacus ut nisl tincidunt tincidunt et sed eros. Nam in velit gravida, hendrerit metus interdum, luctus metus. Aliquam eleifend libero eu fringilla efficitur. Nullam lectus lacus, consequat at tellus sed, mollis vestibulum libero. Ut tempor varius odio." },
    { name: "Jeux Vidéo", image: game, description: "Phasellus nec sapien non nulla imperdiet aliquam et eget libero. Ut lacinia dui massa, eget eleifend enim euismod in. Donec mattis tristique erat, eget gravida risus. Nulla tincidunt est et enim auctor euismod." },
];

const About = ({dark}) => {
    if (dark) {
        document.body.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
    }
    
    const [activeIndex, setActiveIndex] = useState(0);

    console.log(activeIndex);

    return (
        <div className="relative w-5/6 m-auto">
            <Tabs>
                <TabPanel className="flex flex-wrap justify-center">
                    <div className="relative w-1/3">
                        <img className="w-80" src={portrait} alt=""/>
                        <img className="absolute w-40 -top-10 -right-16" src={hello} alt=""/>
                        <img className="absolute w-full -left-10 top-20" src={particle} alt=""/>
                    </div>
                    <div className="flex items-center w-1/2 text-2xl font-openSans">
                        <p>
                            Je m’appelle <b>Dylan Rambinaising, graphiste &amp; illustrateur freelance depuis 2015.</b> Animé par l’amour des arts depuis tout petit j’ai grandi en me nourrissant de tout ce qui m’entourait. Toujours à la recherche de nouveaux défis je me considère comme un créatif compulsif qui vous invites à découvrir son univers sous l’alias de <b>Rugged*.</b>
                        </p>
                        
                    </div>
                </TabPanel>

                <TabPanel>
                <div className="flex flex-wrap items-center justify-center w-full">
                    <div className="flex justify-center w-1/6 m-5">
                        <img className="w-52" src={job} alt=""/>
                    </div>
                    <div className="flex justify-center w-4/6 text-xl font-openSans">
                        <div className="flex flex-col w-1/6 text-secondary">
                            <span className="font-bold">2014 &gt; 2016</span>
                            <span>2 ans</span>
                        </div>
                        <p className="flex flex-col">Lycée des métiers de la chaine graphique Claude-Garamont, <span className="font-thin">à Colombe</span>
                            <span className="font-bold font-futura text-grey">BTS Design graphique option communication et médias imprimés</span></p>
                    </div>
                </div>

                <div className="flex flex-wrap items-center justify-center">
                    <div className="flex justify-center w-1/6 m-5">
                        <img className="w-52" src={school} alt=""/>
                    </div>
                    <div className="flex justify-center w-4/6 text-xl font-openSans">
                        <div className="flex flex-col w-1/6 text-secondary">
                            <span className="font-bold">2014 &gt; 2016</span>
                            <span>2 ans</span>
                        </div>
                        <p className="flex flex-col">Lycée des métiers de la chaine graphique Claude-Garamont, <span className="font-thin">à Colombe</span>
                            <span className="font-bold font-futura text-grey">BTS Design graphique option communication et médias imprimés</span></p>
                    </div>
                </div>
                </TabPanel>

                <TabPanel className="relative flex items-center justify-center pt-10 pb-40">
                    {interests.map((interest, index) =>
                        <>
                            <div className={`justify-center w-1/5 ${index === 0 ? `-mt-12`: ``}`}>
                                <div className="flex items-center justify-center mb-5">
                                    <div>
                                        <img onClick={() => {setActiveIndex(index)}} className="w-52" src={interest.image} alt=""/>
                                        <span className="flex justify-center mt-5 text-lg font-openSans text-greyLight">{interest.name}</span>
                                        <p className={`absolute w-2/5 text-justify font-futura mt-5 bg-secondary bg-opacit0 p-3 ${ activeIndex === index ? 'visible' : 'hidden'}`} dangerouslySetInnerHTML={{ __html: interest.description}}></p>
                                    </div>
                                    {(index < (interests.length -1) ? 
                                        (<span className="inline-block w-5 h-5 m-5 rounded-full bg-secondary"></span>)
                                        :
                                        (<div></div>)
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </TabPanel>
                <TabPanel>
                    Compétences
                </TabPanel>
                <TabList className="absolute bottom-0 left-0 right-0 flex flex-wrap justify-center text-xl tab font-minion text-greyDarker">
                    <Tab className="leading-3 border-b-8 border-opacity-50 border-secondary p-0.5">
                        Introduction
                    </Tab>
                
                    <Tab className="p-5">
                        Expériences
                    </Tab>

                    <Tab className="p-5">
                        Intérêts
                    </Tab>

                    <Tab className="p-5">
                        Compétences
                    </Tab>
                </TabList>
            </Tabs>
        </div>
    )
}

export default About
