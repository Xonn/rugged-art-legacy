import React from 'react'
import three from '../../../images/presentation/3.png';
import dc from '../../../images/presentation/AirFrance/direction_client.png';
import af1 from '../../../images/presentation/AirFrance/01.png';
import af2 from '../../../images/presentation/AirFrance/02.png';
import af3 from '../../../images/presentation/AirFrance/03.png';
import af4 from '../../../images/presentation/AirFrance/04.png';
import af5 from '../../../images/presentation/AirFrance/05.png';
import af6 from '../../../images/presentation/AirFrance/06.png';
import af7 from '../../../images/presentation/AirFrance/07.png';
import af8 from '../../../images/presentation/AirFrance/08.png';
import af9 from '../../../images/presentation/AirFrance/09.png';

const AirFrance = () => {
    return (
        <div className="m-10">
            <h2 className="relative flex items-center my-10 text-4xl font-bold uppercase ml-60">
                <img className="absolute -left-32" src={three} alt="" />
                Air France
            </h2>
            <div className="flex justify-center">
                <img className="w-7/12 m-5" src={af1} alt="" />
                <div className="w-5/12 m-16">
                    <img className="mb-16" src={dc} alt="" />
                    <div className="w-full">
                        <p>Réalisation de multiples supports* web et imprimés pour l’ensemble des <b>événements internationaux</b> internes et externes de la compagnie Air France.
                        Après une fusion des équipes en interne, j’ai réalisé la nouvelle identité du pôle en charge de la valorisation de l’expérience Client.
                        </p>
                        <br />
                        <p>
                        Pour clôturer dignement mon apprentissage chez eux, j'ai réalisé un mémoire sur les bienfaits de cette opportunité au travers de la problématique :
                        </p>
                        <br />
                        <p>
                        <b>« Pourquoi et comment s'approprier l'art de vivre à la française sur le marché international ? »</b>
                        </p>
                        <br />
                        <p className="text-third">* + Création de plus de 70 affiches événementielles + Confection d’un objet éditorial de type mémoire + Réalisation de l’identité visuelle du pôle Client</p>
                    </div>
                </div>
                
            </div>
            <div className="flex flex-wrap">
                <img className="w-1/2 p-5" src={af2} alt="" />
                <img className="w-1/2 p-5" src={af3} alt="" />
            
                <div className="w-2/5 p-5">
                    <img className="" src={af4} alt="" />
                </div>
                <div className="w-3/5 p-5">
                    <img className="" src={af5} alt="" />
                </div>

                <img className="w-full p-5" src={af6} alt="" />
            
                <img className="w-3/5 p-5" src={af7} alt="" />
                <img className="w-2/5 p-5" src={af8} alt="" />
                <img className="flex w-full p-5" src={af9} alt="" />
            </div>
        </div>
    )
}

export default AirFrance
