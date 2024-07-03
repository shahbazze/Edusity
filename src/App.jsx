import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/Video player/VideoPlayer'


function App() {

  const [playstate,setplaystate]=useState(false);
  
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subtitle="Our Program" title="what we offer"/>
    <Programs/>
    <About setplaystate={setplaystate}/>
    <Title subtitle="Gallery" title="campus Photots"/>
    <Campus/>
    <Title subtitle="Testimonials" title="what student says"/>
    <Testimonials/>
    <Title subtitle="Contact Us" title="Get in Touch"/>
    <Contact/>
    <Footer/>
    </div>
    <VideoPlayer playstate={playstate} setplaystate={setplaystate}/>
    </>
  )
}

export default App
