import React from 'react';
import { Language } from './Tags/Language';

export const Skills = () => {
    return (
        <div className='skills'>
            <div className='languages'>
                <h3><i className="fas fa-laptop"></i>    Langages</h3>
                <div className='card language_tags'>
                    <Language label='React'></Language>
                    <Language label='Redux'></Language>
                    <Language label='JS'></Language>
                    <Language label='Rails'></Language>
                    <Language label='HTML'></Language>
                    <Language label='CSS'></Language>
                </div>
            </div>
            <div className='others'>
                <h3><i className="fas fa-pencil-alt"></i>    Autres compétences</h3>
                <ul className='card others-list'>
                    <li><strong>Versioning</strong> avec Git/GitHub.</li>
                    <li><strong>Design</strong> avec Figma.</li>
                    <li><strong>Database design</strong>.</li>
                    <li><strong>Méthode agile</strong> et <strong>travail d'équipe</strong>.</li>
                    
                </ul>
            </div>
        </div>
    );
};