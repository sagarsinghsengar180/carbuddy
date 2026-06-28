import About from "../Components/About";
import Banner from "../Components/Banner";
import Carslider from "../Components/Carslider";
import Enquiryform from "../Components/Enquiryform";
import Feature from "../Components/Feature";
import Service from "../Components/Service";
import Stats from "../Components/Stats";
import Testimonials from "../Components/Testimonials";
import Proccess from "../Components/Proccess";




export default function Homepage() {
  return (
    <>
        <div className="header-carousel">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="First slide"/>
                        <div className="carousel-caption">
                            <div className="container py-4">
                                <div className="row g-5">
                                    <div className="col-lg-6 fadeInLeft animated" data-animation="fadeInLeft" data-delay="1s" style={{animationDelay: "1s"}}>
                                        <div className="bg-secondary rounded p-5">
                                            <h4 className="text-white mb-4">CONTINUE CAR RESERVATION</h4>
                                         <Enquiryform/>   
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-none d-lg-flex fadeInRight animated" data-animation="fadeInRight" data-delay="1s" style={{animationDelay: "1s"}}>
                                        <div className="text-start">
                                            <h1 className="display-5 text-white">Get 15% off your rental Plan your trip now</h1>
                                            <p>Treat yourself in USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="First slide"/>
                        <div className="carousel-caption">
                            <div className="container py-4">
                                <div className="row g-5">
                                    <div className="col-lg-6 fadeInLeft animated" data-animation="fadeInLeft" data-delay="1s" style={{animationDelay: "1s"}}>
                                        <div className="bg-secondary rounded p-5">
                                            <h4 className="text-white mb-4">CONTINUE CAR RESERVATION</h4>
                                           <Enquiryform/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-none d-lg-flex fadeInRight animated" data-animation="fadeInRight" data-delay="1s" style={{animationDelay: "1s"}}>
                                        <div className="text-start">
                                            <h1 className="display-5 text-white">Get 15% off your rental! Choose Your Model </h1>
                                            <p>Treat yourself in USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Feature/>
        <About/>
        <Carslider/>
        <Proccess/>
        <Stats/>
        <Service/>
        <Banner/>
        <Testimonials/>
        
        
    </>
  )
}
