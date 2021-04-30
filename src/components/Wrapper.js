import React from 'react';
import { About } from './About';
import { Skills } from './Skills';
import { Resume } from './Resume';

export const Wrapper = () => {
    return (
        <div className='wrapper'>
            <About />
            <Skills />
            <Resume />
        </div>
    );
};