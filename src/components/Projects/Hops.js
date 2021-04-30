import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../assets/hops.png';
import { Tag } from '../Tags/Tag';

export const Hops = () => {
    return (
        <div className='hops'>
            <div className='hops_description'>
                <h3 className='text-align-right'>Hops!... I did it again!</h3>
                <p>
                    Application Web qui, tel un carnet de bord, permet de 
                    tracker sa consommation de bière.
                    <br/>Ainsi il est possible d'enregistrer (en scannant le codebar) 
                    une bière que l'on vient de goûter, indiquer si elle nous a plu, 
                    obtenir une multitude d'informations concernant le produit mais 
                    aussi le producteur.
                </p>
                <p>
                    Nous avons développé ce projet en équipe de 4 développeurs fullstack, 
                    codé en javascript, Ruby on rails, html, css.
                </p>
                <p className="discret">
                    Le site peut prendre plusieurs secondes à charger.
                </p>
            </div>
            <div className='hops_photo'>
                <Link to="/portfolio/hops"><img src={photo} alt='hops preview'></img></Link>
            </div>
            <div className='hops_footer'>
                <div className='hops_tags'>
                    <Tag label='Fullstack' />
                    <Tag label='Responsive' />
                    <Tag label='Scrapping' />
                    <Tag label='API' />
                    <Tag label='Bootstrap' />
                </div>
                <div className='hops_link'>
                    <a href="https://hops-505.herokuapp.com/" target="blank">
                        Lien vers le site <i className="fas fa-angle-double-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};