
import { useState } from "react";
import { Link,  } from "react-router-dom";

export default function Footer() {
    let [settingData, setSettingData] = useState({
        siteName: import.meta.env.VITE_APP_SITE_NAME,
        address: import.meta.env.VITE_APP_ADDRESS,
        map1: import.meta.env.VITE_APP_MAP1,
        email: import.meta.env.VITE_APP_EMAIL,
        phone: import.meta.env.VITE_APP_PHONE,
        whatsapp: import.meta.env.VITE_APP_WHATSAPP,
        facebook: import.meta.env.VITE_APP_FACEBOOK,
        twitter: import.meta.env.VITE_APP_TWITTER,
        instagram: import.meta.env.VITE_APP_INSTAGRAM,
        linkedin: import.meta.env.VITE_APP_LINKEDIN,
        youtube: import.meta.env.VITE_APP_YOUTUBE,
    }
    )
  return (
    <>
    <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="footer-item d-flex flex-column">
                            <div className="footer-item">
                                <h4 className="text-white mb-4">{settingData.siteName}</h4>
                                <p className="mb-3">{settingData.siteName} is your trusted destination for exploring cars, comparing models, finding expert reviews, and making informed automotive decisions with confidence and ease.
</p>
                            </div>
                            <div className="position-relative">
                                <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email"/>
                                <button type="button" className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-2">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <Link to="/"><i className="fas fa-angle-right me-2"></i> Home</Link>
                            <Link to="/about"><i className="fas fa-angle-right me-2"></i> About</Link>
                            <Link to="/car"><i className="fas fa-angle-right me-2"></i> Cars</Link>
                            <Link to="/feature"><i className="fas fa-angle-right me-2"></i> Feature</Link>
                            <Link to="/service"><i className="fas fa-angle-right me-2"></i> Service</Link>
               
                        </div>
                    </div>
                      <div className="col-md-6 col-lg-6 col-xl-2">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Quick Links</h4>
                          
                            <Link to="/faq"><i className="fas fa-angle-right me-2"></i> Faq</Link>
                            <Link to="/testimonial"><i className="fas fa-angle-right me-2"></i> Testimonial</Link>
                            <Link to="/contact"><i className="fas fa-angle-right me-2"></i> Contact us</Link>
                            <Link to="/privacypolicy"><i className="fas fa-angle-right me-2"></i> Privacypolicy</Link>
                            <Link to="/termandcon"><i className="fas fa-angle-right me-2"></i> Terms & Conditions</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Contact Info</h4>
                            <a href={settingData.map1} target="_blank"><i className="fa fa-map-marker-alt me-2"></i> {settingData.address}</a>
                            <Link to={`mailto=${settingData.email}`} target="_blank"><i className="fas fa-envelope me-2"></i> {settingData.email}</Link>
                            <Link to={`tel=${settingData.phone}`} target="_blank"><i className="fas fa-phone me-2"></i> {settingData.phone}</Link>
                            <a href={`https://wa.me/${settingData.whatsapp}`} className="mb-3" target="_blank"><i className="fas fa-print me-2"></i> {settingData.whatsapp}</a>
                            <div className="d-flex">
                                <a  className="btn btn-secondary btn-md-square rounded-circle me-3" href={settingData.facebook}><i className="fab fa-facebook-f text-white"></i></a>
                                <a  className="btn btn-secondary btn-md-square rounded-circle me-3" href={settingData.twitter}><i className="fab fa-twitter text-white"></i></a>
                                <a  className="btn btn-secondary btn-md-square rounded-circle me-3" href={settingData.instagram}><i className="fab fa-instagram text-white"></i></a>
                                <a  className="btn btn-secondary btn-md-square rounded-circle me-0" href={settingData.linkedin}><i className="fab fa-linkedin-in text-white"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <div className="container-fluid copyright py-4">
            <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-md-6 text-center text-md-start mb-md-0">
                        <span className="text-body"><a href="#" className="border-bottom text-white"><i className="fas fa-copyright text-light me-2"></i>{settingData.siteName}</a>, All right reserved.</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end text-body">
                      
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}
