
import About from '../Components/About'
import Banner from '../Components/Banner'
import Breadcrum from '../Components/Breadcrum'
import Feature from '../Components/Feature'
import Service from '../Components/Service'
import Stats from '../Components/Stats'

export default function Aboutpage() {
  return (
    <>
    <Breadcrum title='about'/>
    <About/>
    <Feature/>
    <Service/>
    <Stats/>
    <Banner/>
    </>
    
  )
}
