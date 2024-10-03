import React from 'react'
import Header from '../../components/header'
import Carousel from '../../components/carousel'

function HomePage() {
  return (
    <div>
      <Header />
      <Carousel numberOfSlides={1} />
      <Carousel numberOfSlides={3} />
    </div>
    
  )
}

export default HomePage