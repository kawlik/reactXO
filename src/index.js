import React from 'react';
import ReactDOM from 'react-dom';

//  component
import App from './app';

//  stylesheet
import './style/main.scss';

/*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *   */

ReactDOM.render(

    <React.StrictMode>
        <App />
    </React.StrictMode>,

    document.getElementById('root')
);