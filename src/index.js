import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routes from './Routes'
import history from './history';
import { Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router history={history}><Routes /></Router>, document.getElementById('root'));
registerServiceWorker();
