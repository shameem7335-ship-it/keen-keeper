import React, { useEffect, useState } from 'react';
import { useContact } from '../components/customhooks';
import { MdOutlineTextsms, MdWifiCalling3 } from 'react-icons/md';
import { IoVideocamOff } from 'react-icons/io5';



const TimelinePage = () => {
    const {checkIn} = useContact();
    console.log(checkIn);

    const [sortyTipe, setSortingType] = useState("");


    const filterdData = sortyTipe ? checkIn.filter(item => item.type === sortyTipe) : checkIn ;
    return (
        <div className='  bg-[#F8FAFC] py-10'>

        <div className='container mx-auto ' >
           <h1 className=' text-2xl font-bold '>TimeLine</h1>
         <div className="dropdown dropdown-bottom dropdown-center">
  <div tabIndex={0} role="button" className="btn m-1 ">Filter timeline <span className='ml-20'>⬇️</span> </div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={() => setSortingType('call')}><a>Call</a></li>
    <li  onClick={() => setSortingType('video')}><a>Video</a></li>
    <li  onClick={() => setSortingType('text')}><a>Text</a></li>
  </ul>
</div>

      {
        filterdData.map((item, index)=>
        <div key={index} className='bg-white my-2 py-4 '>
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
                </div>
        )
      }

          {/* {
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
          } */}
          </div>
        </div>
    );
};

export default TimelinePage;