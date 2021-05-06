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

const experiences = [
    { image: job, year: "2014 > 2016",
        period: "2 ans", 
        establishment: "Lycée des métiers de la chaine graphique Claude-Garamont,", 
        place: "à Colombe", 
        degree: "BTS Design graphique option communication et médias imprimés"},
    { image: school, year: "2011 > 2014", period: "1 an", establishment: "Lycée du livre et des arts graphiques Maximilien-Vox,", place: "à Paris", degree: "Baccalauréat STD2A (Sciences et Technologies du Design et des Arts Appliqués)"}
]
const About = ({dark}) => {
    if (dark) {
        document.body.classList.remove('dark');
    } else {
        document.body.classList.add('dark');
    }
    
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="relative w-5/6 px-5 py-10 m-auto">
            <Tabs>
                <TabPanel className="flex flex-wrap justify-center">
                    <div className="w-full text-center lg:w-1/3">
                        <div className="relative inline-block text-center">
                            <img className="w-40 md:w-80" src={portrait} alt=""/>
                            <img className="absolute w-20 md:w-40 -right-10 -top-8 md:-top-12 md:-right-24" src={hello} alt=""/>
                            <img className="absolute w-full left-5 top-20" src={particle} alt=""/>
                        </div>
                    </div>
                    <div className="flex items-center w-full mb-10 text-xl text-justify md:w-4/5 lg:ml-20 lg:w-1/2 font-openSans">
                        <p>
                            Je m’appelle <b>Dylan Rambinaising, graphiste &amp; illustrateur freelance depuis 2015.</b> Animé par l’amour des arts depuis tout petit j’ai grandi en me nourrissant de tout ce qui m’entourait. Toujours à la recherche de nouveaux défis je me considère comme un créatif compulsif qui vous invites à découvrir son univers sous l’alias de <b>Rugged*.</b>
                        </p>
                    </div>
                </TabPanel>

                <TabPanel>
                    {experiences.map(experience =>         
                        <div className="flex flex-wrap items-start justify-center w-full">
                            <div className="flex justify-center w-1/2 my-5 md:w-1/5">
                                <img className="w-52" src={experience.image} alt=""/>
                            </div>
                            <div className="flex flex-col items-center w-full mb-5 mr-3 md:mt-20 md:items-start md:w-1/12 text-secondary">
                                <span className="font-bold">{experience.year}</span>
                                <span>{experience.period}</span>
                            </div>
                            <div className="flex flex-col justify-start w-3/5 mb-5 text-xl md:mt-20 md:flex-row font-openSans">
                                <p className="flex flex-col w-full font-semibold text-center md:w-5/6 md:text-left">
                                    <div>
                                        {experience.establishment}
                                        <span className="font-light text-grey"> {experience.place}</span>
                                    </div>
                                    <span className="font-bold font-futura text-grey">{experience.degree}</span>
                                </p>
                            </div>
                        </div>
                    )}
                </TabPanel>

                <TabPanel className="relative">
                    <div className="flex flex-row flex-wrap items-center justify-center">
                        {interests.map((interest, index) =>
                            <>
                                <div className={`justify-center w-1/3 md:w-1/5 p-2 md:p-8 ${index === 0 ? `-mt-11`: ``}`}>
                                    <div className="relative flex items-center justify-center mb-5">
                                        <div>
                                            <img onClick={() => {setActiveIndex(index)}} className="w-52" src={interest.image} alt=""/>
                                            <span className="flex justify-center mt-5 text-lg font-openSans text-greyLight">{interest.name}</span>
                                        </div>
                                        {(index < (interests.length -1) ? 
                                            (<span className={`absolute hidden md:inline-block w-5 h-5 m-5 rounded-full -right-14 bg-secondary ${index === 0 ? `top-28`: ``}`}></span>)
                                            :
                                            (<div></div>)
                                        )}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="h-48">
                        {interests.map((interest, index) =>
                            <p className={`w-full lg:w-2/3 justify-center m-auto text-justify font-futura bg-secondary bg-opacit0 p-5 ${ activeIndex === index ? 'visible' : 'hidden'}`} dangerouslySetInnerHTML={{ __html: interest.description}}></p>
                        )}
                    </div>
                </TabPanel>
                <TabPanel>
                    Compétences
                </TabPanel>
                <TabList className="absolute bottom-0 left-0 right-0 flex flex-wrap justify-center mt-20 text-xl tab font-minion text-greyDarker">
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
