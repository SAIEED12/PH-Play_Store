import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/footer/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
  <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* flex-grow: This tells the content area to take up all available 
         space, pushing the footer to the very bottom.
      */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
        <ToastContainer />
        </div>
    );
};

export default RootLayout;