import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
                    <Header></Header>
                        <Navbar></Navbar>
             <Outlet></Outlet>
               <Footer></Footer>
        </div>
    );
};

export default MainLayout;