import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import * as serviceWorker from './serviceWorker';

import App from './App';

const app = <BrowserRouter><App/></BrowserRouter>;
ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
