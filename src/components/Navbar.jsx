import React from 'react'


function Navbar() {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 font-["Neue Montreal"] flex justify-between item' >
      <div className='logo-name text-white font-semibold '>
DevSquads
      </div>
      <div className='Links flex gap-10'>
        {['Services','Our work','About us', 'Insights', 'Contact us'].map((item,index)=>(
          <a key={index} className={`text-lg capitilized font-lighter ${index ===  4 &&'ml-32'}`}
          >{item}
        
          </a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
