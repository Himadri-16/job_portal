import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import JobList from '../components/JobList'
import AppDownload from '../components/AppDownload'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <JobList/>
      <AppDownload/>
      <Footer/>
    </div>
  )
}

export default Home
