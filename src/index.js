import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {Provider} from 'react-redux' 
import { store } from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import './fonts/montserrat-v25-latin-500.woff'
import './fonts/montserrat-v25-latin-500.woff2'
import './fonts/montserrat-v25-latin-600.woff'
import './fonts/montserrat-v25-latin-600.woff2'
import './fonts/montserrat-v25-latin-700.woff'
import './fonts/montserrat-v25-latin-700.woff2'

const root = ReactDOM.createRoot(document.getElementById('root'));

export const baseUrl = 'http://localhost:3333'

root.render(
    <Router>
        <Provider store = {store}>
            <App/>
        </Provider>
    </Router>
);
