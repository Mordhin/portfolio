import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import history from '../history';

export const Navbar = () => {
    const [toggleState, setToggleState] = useState(history.location.pathname);

    const toggleTab = (name) => {
        setToggleState(name);
    }

    return (
        <div className='navbar'>
            <div className='name'> <h1>JULIEN CORION</h1></div>
            <div className='buttons'>

                <div className = {toggleState === '/' ? 'nav_button active' : 'nav_button'}>
                    <Link to='/'
                        onClick = {() => toggleTab('/')}>
                        À propos
                    </Link>
                </div>
        
                <div className = {toggleState === '/portfolio' ? 'nav_button active' : 'nav_button'}>
                    <Link to='/portfolio' 
                        onClick = {() => toggleTab('/portfolio')}>
                        Portfolio
                    </Link>
                </div>

                <div className = {toggleState === '/contact' ? 'nav_button active' : 'nav_button'}>
                    <Link to='/contact' 
                        onClick = {() => toggleTab('/contact')}>
                        Contact
                    </Link>
                </div>
 
            </div>
        </div>
    );
};