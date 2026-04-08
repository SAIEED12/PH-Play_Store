import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'; 
import footerlogo from "../../assets/images/logo.png"
const Footer = () => {
  return (
    <footer className="bg-[#001529] text-white py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
           <img src={footerlogo} alt="footerlogo" className='h-[100px]'/>
           <span className="text-xl font-bold tracking-wider">HERO.IO</span>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <h3 className="text-lg font-medium">Social Links</h3>
            <div className="flex gap-4 text-2xl">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-700 mb-8" />
        <div className="text-center text-gray-400 text-sm">
          <p>Copyright © 2025 - All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;