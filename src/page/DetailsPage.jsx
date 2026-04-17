import React, { use } from 'react';
import { HiBellSnooze } from 'react-icons/hi2';
import { IoVideocamOff } from 'react-icons/io5';
import { MdOutlineTextsms, MdWifiCalling3 } from 'react-icons/md';
import { PiArchiveFill } from 'react-icons/pi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link, useParams } from 'react-router';
import { useContact } from '../components/customhooks';

const promise = fetch('/data.json').then(res => res.json());


const DetailsPage = () => {


const {checkInHandler} = useContact();

     const {id} = useParams();
    //  console.log(id)
     const allData = use(promise);
    
     const ecpectedCard = allData.find(card => card.id == id);
    //  console.log(ecpectedCard);

    return (
   <div className='flex flex-col lg:flex-row md:justify-center container mx-auto   bg-[#F8FAFC]'>
       <div className='my-10 mr-10'>
         <div className='flex flex-col items-center text-center justify-center '>
               <div  className='shadow shadow-[0, 0, 0, 0.15] bg-white py-5 space-y-1 rounded-sm p-10'>
                 <img className='mx-auto' src={ecpectedCard.picture} alt="" />
                 <h1 className='font-bold text-xl'>{ecpectedCard.name}</h1>
                 <h1 className='text-[#64748B]'>62 days ago</h1>
                  <h1 className= {`inline-block rounded-full text-white px-3 py-1 ${ ecpectedCard.status== 'overdue' ? "bg-red-300" : ecpectedCard.status== 'on-track' ? "bg-[#244D3F]" : ecpectedCard.status== 'almost due' ? "bg-[#EFAD44]" : "" }`}>{ecpectedCard.status}</h1>
                 <div className='flex justify-center gap-2 my-3'>{
                     ecpectedCard.tags.map((tag, index) => <h1 key={index} className='bg-green-200 px-3 py-0 rounded-2xl text-center'>{tag}</h1> )
                   }
                   </div>
                   <h1 className='text-[#64748B]'>"{ecpectedCard.bio}"</h1>
                   <h1  className='text-[#64748B]'>Preferd: email</h1>
               </div>
             <div>

             </div>
         </div>
         <div className='flex flex-col gap-3 mt-4'>
          <button className='btn'><HiBellSnooze /> Snooze 2 weeks</button>
          <button className='btn'><PiArchiveFill /> Archive</button>
          <button className='btn text-red-400'><RiDeleteBin6Line /> Delete</button>
         </div>
       </div>


       <div className='my-10 ml-0 md:ml-10'>
        {/* -- */}
        <div className='flex flex-col md:flex-row  gap-5'>
            <div className='text-center p-12 shadow shadow-[0, 0, 0, 0.15] bg-white rounded-sm'>
                <p className='text-[#1F2937] text-2xl text-2xl font-bold mb-3'>62</p>
                <p className='text-[#64748B] font-semibold'>Days Since Contact </p>
            </div>
            <div className='text-center p-12 shadow shadow-[0, 0, 0, 0.15] bg-white rounded-sm'>
                <p className='text-[#1F2937] text-2xl text-2xl font-bold mb-3'>30</p>
                <p className='text-[#64748B] font-semibold'>Goal (Days)</p>
            </div>
            <div className='text-center p-12 shadow shadow-[0, 0, 0, 0.15] bg-white rounded-sm '>
                <p className='text-[#1F2937] text-2xl text-2xl font-bold mb-3'>Feb 27, 2026</p>
                <p className='text-[#64748B] font-semibold'>Next Due</p>
            </div>
        </div>
        {/* -- */}
        <div className='bg-white rounded-sm my-4  px-12 py-5'>
     <div className='flex justify-between'>
        <h1>Relationship Goal</h1>
        <button className='btn'>Edit</button>
     </div>
     <h1>Connect every <span className='font-bold'>30 days</span></h1>
        </div>
        {/* -- */}
        <div  className='bg-white  px-12 py-5'>
           <h1 className='text-2xl font-bold mb-4'>Quick Check-In</h1>
           <div className='flex flex-col md:flex-row md:justify-between gap-3'>
             <button onClick={()=> checkInHandler("call", ecpectedCard)} className='btn text-center items-center px-22 py-10 rounded-sm bg-[#F8FAFC] shadow shadow-[0, 0, 0, 0.15]'>
                <div className='flex flex-col'>
                <p className='text-[#1F2937] text-2xl text-2xl font-bold mb-3'><MdWifiCalling3 /></p>
                <p className=' font-semibold'>Call </p></div>
            </button>
             <button onClick={()=> checkInHandler("text", ecpectedCard)} className='btn text-center items-center px-22  py-10 rounded-sm bg-[#F8FAFC] shadow shadow-[0, 0, 0, 0.15]'>
                <div className='flex flex-col'>
                <p className='text-[#1F2937] text-2xl text-2xl font-bold mb-3'><MdOutlineTextsms /></p>
                <p className='font-semibold'>Text </p></div>
            </button>
             <button onClick={()=> checkInHandler("video", ecpectedCard)} className='btn text-center items-center px-22 py-10 rounded-sm bg-[#F8FAFC] shadow shadow-[0, 0, 0, 0.15]'>
                <div className='flex flex-col'>
                    <p className='text-[#1F2937] text-2xl text-2xl font-bold mb-3'><IoVideocamOff /></p>
                <p className=' font-semibold'>Video</p>
                </div>
            </button>
           </div>
        </div>
       </div>
   </div>
   );
};

export default DetailsPage;