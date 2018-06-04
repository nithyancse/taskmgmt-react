import React from 'react'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:9000/taskmgmt';

const Home = () => (
    <div>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </div>
)

export default Home