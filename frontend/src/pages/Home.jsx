import React from 'react'
import Hero from '../components/Hero'
import TopNiches from '../components/TopNiches'
import HowItWorks from '../components/HowItWorks'
import About from './About'

const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <TopNiches/>
      <HowItWorks/>
    </>
  )
}

export default Home;