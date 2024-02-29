import React from 'react';

import { motion } from 'framer-motion';
function Marquee() {
  return (
    <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#ee82ee]'>
      <div className='text border-t-4 border-b-2 border-white flex whitespace-nowrap gap-10 overflow-hidden'>
        {/* <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[8vw] leading-none font-["Founders_Grotesk_x-condensed"] uppercase -mb-15 pt-7'>
          devsquads
        </motion.h1> */}

<motion.h1
  initial={{ x: 0 }}
  animate={{ x: "-100%" }}
  transition={{ ease: "linear",  Infinity, duration: 7 }}
  className='text-[8vw] leading-none font-["Founders_Grotesk_x-condensed"] uppercase -mb-[7vw] pt-7'
>
  we are devsquads
</motion.h1>


<motion.h1
  initial={{ x: 0 }}
  animate={{ x: "-100%" }}
  transition={{ ease: "linear", repeat: Infinity, duration: 4}}
  className='text-[8vw] leading-none font-["Founders_Grotesk_x-condensed"] uppercase -mb-15 pt-7'
>
  we are devsquads

</motion.h1>




      </div>
    </div>
  );
}

export default Marquee;




