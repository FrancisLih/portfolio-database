import React from 'react'
import Header from './header/Header'
import About from './about/About'
import Banner from './banner/Banner'
import Showcase from './showcase/Showcase'
import Experience from './experience/Experience'

const Home = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <About/>
      <Showcase/>
      <Experience/>
    </>
  )
}

export default Home