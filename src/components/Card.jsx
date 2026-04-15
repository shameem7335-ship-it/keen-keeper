import React from 'react';
import { Link } from 'react-router';

const Card = ({data}) => {
    return (
         <Link to={`/homepage/details/${data.id}`}
        
          className='shadow shadow-[0, 0, 0, 0.15] rounded-sm bg-white py-5 space-y-1'>
                  <img className='mx-auto' src={data.picture} alt="" />
                  <h1 className='font-bold text-xl'>{data.name}</h1>
                  <h1 className='text-[#64748B]'>62 days ago</h1>
                  <div className='flex justify-center gap-2'>{
                      data.tags.map((tag, index) => <h1 key={index} className='bg-green-200 px-3 py-0 rounded-2xl text-center'>{tag}</h1> )
                    }
                    </div>
                   <h1 className= {`inline-block rounded-full text-white px-3 py-1 ${ data.status== 'overdue' ? "bg-red-300" : data.status== 'on-track' ? "bg-[#244D3F]" : data.status== 'almost due' ? "bg-[#EFAD44]" : "" }`}>{data.status}</h1>
                </Link>
    );
};

export default Card;