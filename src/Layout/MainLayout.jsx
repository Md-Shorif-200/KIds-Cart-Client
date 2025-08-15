import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Header from '../Components/Header';

const MainLayout = () => {
    return (
        <div>
                    <Header></Header>
                        <Navbar></Navbar>
             <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;