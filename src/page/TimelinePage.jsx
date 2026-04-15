import React from 'react';
import { useContact } from '../components/customhooks';
import { MdOutlineTextsms, MdWifiCalling3 } from 'react-icons/md';
import { IoVideocamOff } from 'react-icons/io5';



const TimelinePage = () => {
    const {checkIn} = useContact();
    console.log(checkIn)
    return (
        <div className='container mx-auto  bg-[#F8FAFC] p-10'>
           <h1 className='text-2xl font-bold'>TimeLine</h1>
           <button>filter item</button>
          {
            checkIn.map((item, index) => <div key={index} className='bg-white my-2 py-4 '>
            <div className='flex gap-5 items-center text-center '>
                <div className='pl-3 text-2xl'>
               {item.type ==="call" &&  <MdWifiCalling3 />}
               {item.type ==="video" && <IoVideocamOff  />}
               {item.type ==="text" &&   <MdOutlineTextsms />}
                 </div>
                <div>
                <h1 className='text-start'><span className='font-bold'>{item.type}</span> with {item.user.name}</h1>
                    <p>{new Date(item.time).toLocaleString()}</p>
                    </div>
                </div>
                </div>)
          }
        </div>
    );
};

export default TimelinePage;