import React from 'react'
import Hero from '../components/Hero'
import Movie from '../components/Movie'
import PopularBD from '../components/PopularBD'
import Mostwatch from '../components/Mostwatch'
import Leavesoon from '../components/Leavesoon'
import Faq from '../components/Faq'
const Home = () => {
  return (
    <div>
      <div>
        <Hero />
        <Movie />
        <PopularBD />
        <Mostwatch />
        <Leavesoon/>
        <Faq/>
      </div>
    </div>
  )
}

export default Home