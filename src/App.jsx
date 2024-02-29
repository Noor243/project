import React from 'react'
import Eyes from './components/Eyes.jsx'
import Navbar from './components/Navbar.jsx'
import Landing from './components/Landing.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Featured from './components/Featured.jsx'
function App() {
  return (
    <div className='w-full min-h-screen text-white bg-[#800080]'>
    <Navbar/>
    <Landing/>
 <Marquee/>
 <About/>
 <Eyes/>
 <Featured/>
    </div>
  )
}

export default App
