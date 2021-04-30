import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import './index.scss';


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);

// Live Reloading fix
if (module.hot) {
    module.hot.accept();
}