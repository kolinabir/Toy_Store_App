import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../SharedCom/Navbar';
import Footer from '../SharedCom/Footer';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;