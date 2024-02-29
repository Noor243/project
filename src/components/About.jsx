import React from 'react'

function About() {
  return (
    <div className='w-full p-20   rounded-tl-3xl rounded-tr-3xl '>
      <h1 className='font-[Neue-Montreal] text-[3vw] leading-[3vw] tracking-tight'>
      "Meet the innovative minds sculpting digital experiences—our DevSquad team blends creativity with cutting-edge technology to craft captivating front-end solutions, setting new standards in user-centric design.
      
"Our front-end developer team brings pixel-perfect precision and seamless user interactions to life, ensuring every click feels intuitive and every design element mesmerizes"</h1>


<div className='w-full p-10 border-t-[1px] mt-20 border-white flex gap-5'>
<div className='w-1/2'>
  <h1 className='text-5xl'>Our Approach</h1>

<button className='flex gap-10 px-9 py-6 bg-[#da70d6] mt-9 rounded-full text-white'>Read more
<div className='w-1.5 h-1.5 uppercase bg-zinc-100 rounded-full items-center'></div>
</button>
  </div>

<div className='w-1/2 h-[70vh] bg-white rounded-3xl flex'></div>
</div>
    </div>
  )
}

export default About
