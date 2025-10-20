import React from 'react'
import { Header } from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopMusican from '../components/TopMusican'
import { Banner } from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopMusican/>
      <Banner/>
    </div>
  )
}

export default Home