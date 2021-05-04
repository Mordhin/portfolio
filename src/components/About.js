import React from 'react';
import photo from '../assets/photonb.png';

export const About = () => {
    return (
        <div className='about'>
            <div className='photo'>
                <img src={photo} alt='me'></img>
            </div>
            <div className='description'>
                <h2>Bonjour, je suis Julien !</h2>
                <h3>Développeur Front-End junior</h3>
                <p>Je suis passionné par le développement web et j'aime créer des UIs <strong>dynamiques</strong>, <strong>responsives</strong> et <strong>intuitives</strong>.
                <br/>Vous trouverez dans le portfolio des projets web personnels, ou auxquels j'ai participé en tant que webdev.
                <br/>Basé dans le <strong>Nord de la France</strong>, je suis également disponible partout ailleurs, en <strong>remote</strong>. </p>
                <p>Je recherche des opportunités pour dépasser mes limites et gagner en expérience.</p>
            </div>
            
        </div>
    );
};

