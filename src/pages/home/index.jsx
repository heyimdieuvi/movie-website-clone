
import Header from '../../components/header'
import Carousel from '../../components/carousel'

function HomePage() {
  return (
    <div>
      <Header />
      <Carousel numberOfSlides={1} category='Comedy' />
      <Carousel numberOfSlides={3} category='Drama' />
    </div>
    
  )
}

export default HomePage