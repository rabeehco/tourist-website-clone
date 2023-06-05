import React from 'react'
import NavigationBar from './pages/NavigationBar/navigationBar'
import Hero from './pages/Hero/Hero'
import Destination from './pages/Destination/destination'
import About from './pages/About/About'
import Blog from './pages/Blogs/blogs'
import Footer from './pages/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Destination />
      <About />
      <Blog />
      <Footer />
    </>
  )
}

export default App