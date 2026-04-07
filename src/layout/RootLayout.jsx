import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/footer/Footer';

const RootLayout = () => {
    return (
        <div>
        <Navbar></Navbar>
            <Outlet />  {/* this dynamic changes comes from main routing path */}
        <Footer></Footer>
        </div>
    );
};

export default RootLayout;