import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../SharedCom/Navbar';
import Footer from '../SharedCom/Footer';

const Home = () => {
    const loc = useLocation();
    useEffect(()=>{
        if (loc.pathname=='/') {
            document.title= `ToyCar-Store | Home`
        }else{
            document.title= `ToyCar-Store ${loc.pathname.replace('/','| ')}`

        }

    },[loc.pathname])
        return (
        <div className='overflow-hidden'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;