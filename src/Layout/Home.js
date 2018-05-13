import React from 'react'
import LogoBar from './LogoBar'
import Router from '../Router'
import { BrowserRouter } from 'react-router-dom';
const Home = () => (
    <div>
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    </div>
)

export default Home