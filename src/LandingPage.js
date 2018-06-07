import axios from 'axios'
import React from 'react'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:9000/taskmgmt';

const LandingPage = () => (
    <div>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </div>
)

export default LandingPage