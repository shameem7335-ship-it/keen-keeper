import React, { useEffect, useState } from 'react';
import { useContact } from '../components/customhooks';
import { MdOutlineTextsms, MdWifiCalling3 } from 'react-icons/md';
import { IoVideocamOff } from 'react-icons/io5';



const TimelinePage = () => {
    const [search, setSearch] = useState("");

    const searchHandler = (e) => {
     e.preventDefault();
     setSearch(e.target.value)
     console.log(e.target.value)
    }



    const {checkIn} = useContact();
    console.log(checkIn);

    const [sortyTipe, setSortingType] = useState("");


    const filterdData = checkIn.filter(item =>{
       const typeResult =  sortyTipe ? item.type === sortyTipe : true ; 
       const searchResult = item.user.name.toLowerCase().includes(search.toLowerCase())
       return typeResult && searchResult
    });
    return (
        <div className='  bg-[#F8FAFC] py-10'>

        <div className='container mx-auto ' >
           <h1 className=' text-2xl font-bold '>TimeLine</h1>


<div className='flex justify-between'>
{/* filter */}
         <div className="dropdown dropdown-bottom dropdown-center">
  <div tabIndex={0} role="button" className="btn m-1 ">Filter timeline <span className='ml-20'>⬇️</span> </div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li onClick={() => setSortingType('call')}><a>Call</a></li>
    <li  onClick={() => setSortingType('video')}><a>Video</a></li>
    <li  onClick={() => setSortingType('text')}><a>Text</a></li>
  </ul>
</div>
{/*  search*/}
       <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" 
  placeholder="Search by name"
  value={search}
  onChange={ searchHandler}
  />
</label>
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
          </div>
        </div>
    );
};

export default TimelinePage;