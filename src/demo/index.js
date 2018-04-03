import React from 'react'
import ReactDOM from 'react-dom';
import Routes from './Routes.jsx'

import { HashRouter } from 'react-router-dom';

ReactDOM.render(<HashRouter>
    <Routes />
</HashRouter>, document.getElementById('root'))