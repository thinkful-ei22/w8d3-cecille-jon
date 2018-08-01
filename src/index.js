import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store'
import './index.css';
import RegisterForm from './registerform';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store} ><RegisterForm /></Provider>, document.getElementById('root'));
registerServiceWorker();
