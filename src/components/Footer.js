import React from 'react';

export const Footer = () => {
    return <footer className='footer'>
        
        <div>Contact : astram59@gmail.com</div>
        <ul>
          <a href='https://www.linkedin.com/in/julien-corion-4945021b1' target='blank'>
            <li><i className="fab fa-linkedin"></i></li>
          </a>
          <a href='https://github.com/Mordhin' target='blank'>
            <li><i className="fab fa-github-square"></i></li>
          </a>
            <li><i className="fab fa-twitter-square"></i></li>
        </ul>
        
        <div className='font'> Site développé avec React <i className="fab fa-react "></i>.</div>
    </footer>;
};

