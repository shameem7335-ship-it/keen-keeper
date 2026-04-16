import React from 'react';

const InvalidRoute = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center bg-[#F8FAFC] p-35'>
            <h1 className='text-7xl font-bold text-amber-300'>404</h1>
            <h2 className='text-4xl font-bold'>Page not found</h2>
            <h2 className='text-4xl font-bold text-gray-700 my-6'> Sorry, the page you are looking for doesn’t exist or has been moved.</h2>
        </div>
    );
};

export default InvalidRoute;