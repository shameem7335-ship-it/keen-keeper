import React, { Suspense, useState } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import LoadingAnimation from './LoadingAnimation';

const MainLayout = () => {

    return (
        <div>
            <Navbar> </Navbar>
            <Suspense fallback={<LoadingAnimation></LoadingAnimation>}>
            <Outlet></Outlet>
           </Suspense>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;