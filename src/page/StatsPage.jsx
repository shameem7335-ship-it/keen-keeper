import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { useContact } from '../components/customhooks';


const StatsPage = () => {
  const {checkIn} = useContact();
  console.log(checkIn);

let callCount = 0;
let textCount = 0;
let videoCount = 0;

{
  checkIn.map((item) =>
{  if(item.type === "call") callCount++;
  if(item.type === "text") textCount++;
  if(item.type === "video") videoCount++;}
  )
}
console.log(callCount, textCount, videoCount)


  const data = [
  { name: 'call', value:callCount, fill: '#0088FE' },
  { name: 'video', value: videoCount, fill: '#00C49F' },
  { name: 'text', value: textCount, fill: '#FFBB28' },

  ];
  return (
    <div className=' bg-[#F8FAFC]'>
      <h1 className='p-5 font-bold text-3xl container mx-auto'>Friendship Analytics</h1>
      <div className='my-10 container mx-auto bg-white'>
      <h1 className='font-bold p-5'>By Interaction Type</h1>

    <PieChart style={{margin:'auto', width: '100%', maxWidth: '300px', maxHeight: '60vh', aspectRatio: 1, padding: '20px'}} responsive>
       <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      
      />
     <Tooltip></Tooltip>
     <Legend></Legend>
    </PieChart>
        </div>

    </div>
  );
};

export default StatsPage;