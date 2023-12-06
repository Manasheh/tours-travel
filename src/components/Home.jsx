import React from 'react'
import Hero from './Hero'
import Main from './Main'
import Video from './Video'
import Footer from '../components/Footer'
// import Travel from './Travel'
function Home() {
  return (
    <div>
        <Hero></Hero>
        <Main></Main>
        {/* <Travel></Travel> */}
        <Video></Video>
        <Footer></Footer>
    </div>
  )
}

export default Home