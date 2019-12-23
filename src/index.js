import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "mobx-react";

import BirdStore from "./stores/BirdStore";

const ROOT =
    <Provider BirdStore={BirdStore}>
        <App/>
    </Provider>

ReactDOM.render(ROOT, document.getElementById('root'));

