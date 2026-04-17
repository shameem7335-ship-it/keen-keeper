import React, { use } from 'react';
import { Link } from 'react-router';
import Card from '../components/card';
import { FaPlus } from 'react-icons/fa';

const promise=  fetch('/data.json').then(res => res.json());

const Homepage = () => {
 const allData = use(promise);


    return (
   
        <div   className=' bg-[#F8FAFC] '>
          <div className='flex flex-col items-center justify-center text-center space-y-3.5 container mx-auto'>
            <h1 className='text-2xl font-bold text-[#1F2937] mt-10'>Friends to keep close in your life</h1>
            <p className='font-semibold text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br/> relationships that matter most.</p>
            <button className='btn btn-neutral mb-5'><FaPlus /> Add a friend</button>
          </div>
          <div className=' grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10 container mx-auto '>
            <div className='text-center p-12 shadow shadow-[0, 0, 0, 0.15] bg-white rounded-sm'>
                <p className='text-[#1F2937] text-2xl text-2xl font-bold mb-3'>{allData.length}</p>
                <p className='text-[#64748B] font-semibold'>Total Friend</p>
            </div>
            <div className='text-center p-12 shadow shadow-[0, 0, 0, 0.15 bg-white rounded-sm'>
                <p className='text-[#1F2937] text-2xl font-bold mb-3'>3</p>
                <p className='text-[#64748B] font-semibold'>On Track</p>
            </div>
            <div className='text-center p-12 shadow shadow-[0, 0, 0, 0.15 bg-white rounded-sm'>
                <p className='text-[#1F2937] text-2xl font-bold mb-3'>6</p>
                <p className='text-[#64748B] font-semibold'>Need Attention</p>
            </div>
            <div className='text-center p-12 shadow shadow-[0, 0, 0, 0.15 bg-white rounded-sm'>
                <p className='text-[#1F2937] text-2xl font-bold mb-3'>12</p>
                <p className='text-[#64748B] font-semibold'>Interactions This Month</p>
            </div>
          </div>
          <div className='container mx-auto'>
          <div className='my-10 border border-b-1 border-[#dfe2e7]'></div>
            <h1 className='font-bold text-2xl mb-3'>Your frineds</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10 mx-auto text-center items-center space-x-5 space-y-5'>
                {
                    allData.map(data =>
                        
                            <Card key={data.id} data={data}></Card>
                    )
                }
            </div>
          </div>
        </div>
         
    );
};

export default Homepage;