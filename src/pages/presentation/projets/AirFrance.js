import React from 'react'
import three from '../../../images/presentation/3.png';
import dc from '../../../images/presentation/AirFrance/direction_client.png';
import af1 from '../../../images/presentation/AirFrance/01.png';
import af2 from '../../../images/presentation/AirFrance/02.png';
import af3 from '../../../images/presentation/AirFrance/03.png';
import af4b from '../../../images/presentation/AirFrance/04b.png';
import af6 from '../../../images/presentation/AirFrance/06.png';
import af7b from '../../../images/presentation/AirFrance/07b.png';
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
                <div className="flex flex-col justify-center w-5/12 m-8">
                    <img className="mb-16" src={dc} alt="" />
                    <div className="w-10/12">
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
                        <p className="font-bold text-third">* + Création de plus de 70 affiches événementielles <br /> + Confection d’un objet éditorial de type mémoire <br /> + Réalisation de l’identité visuelle du pôle Client</p>
                    </div>
                </div>
                
            </div>
            <div className="flex flex-wrap">
                <img className="w-1/2 p-5" src={af2} alt="" />
                <img className="w-1/2 p-5" src={af3} alt="" />
                <img className="p-5" src={af4b} alt="" />


                <img className="w-full p-5" src={af6} alt="" />
            
                <img className="p-5" src={af7b} alt="" />
                
                <img className="flex w-full p-5" src={af9} alt="" />
            </div>
        </div>
    )
}

export default AirFrance
