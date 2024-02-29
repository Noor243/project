import React from 'react'
// import { FaLongArrowAltUp } from "react-icons/fa";
function Landing() {
  return (
    <div className='w-full h-screen bg-[#800080] pt-1'>


      <div className='textstructure mt-40 px-20'>
         {['dev squads', ' web site ', 'presentation' ].map((item,index)=> {
  return (
  <div className='masker'>
    <div className='w-fit flex items-end  overflow-hidden'>
      {index === 1 && <div className='mr-5 w-[8vw] h-[5.7vw] bg-[#da70d6] top-[1.3vw] relative'></div>}
  <h1 className=' pt-[1vw] uppercase text-[6vw] leading-[.75] 
  font-["Founders_Grotesk"]'>{item}
  </h1></div>

</div> 
  )
})}




{/* 
<div className='masker'>
 
  <h1 className='uppercase text-7xl leading-none tracking-tighter font-medium
  font-["Founders_Grotesk"]flex items-center'>my 1st
  </h1>


  <h1 className='uppercase text-7xl leading-none tracking-tighter font-medium
  font-["Founders_Grotesk"]'> website
  </h1>

  <h1 className='uppercase text-7xl leading-none tracking-tighter font-medium
  font-["Founders_Grotesk"]'>presentations
  </h1>

</div> */}

</div>

<div className='border-t-[1px] border-white mt-20 flex justify-between items center py-5 px-20'>{['For Public And Private Companies', 'From The First Pitch to IPO'].map((item,index)=>(<p className='text-md font-light tracking-tight leading-none'>{item}</p>

))}

<div className='start'>
<div className='px-4  border-[2px] white font-light text-sm rounded-full '>Start The Project</div>
{/* <div className=' flex items-center justify-center w-10 h-10 rounded-full border-[2px] border-zinc-500' ><FaLongArrowAltUp /></div> */}
</div>

</div>


      </div>
      
    

  )
}

export default Landing
