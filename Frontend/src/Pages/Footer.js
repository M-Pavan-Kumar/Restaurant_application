import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import 'bootstrap/dist/css/bootstrap.min.css';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo from "../Images/logo.jpeg"
import "../Css/footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='mt-2'>
        <div className='footer1 d-none d-md-flex flex-md-row align-items-center justify-content-between'>
            <Link to="/" className="mb-3 mb-md-0">
                <img className='images img-fluid' src={logo} alt="Red Cliff Logo" />
            </Link>
            <h3 className='text1 text-center text-md-left mb-3 mb-md-0'>
                For better experience, download <br className="d-none d-md-block" />
                the <span className='text-danger'>Red</span> Cliff app now
            </h3>
            <div className="d-flex flex-column flex-md-row">
                <a href="https://www.playstore.com" target="_blank" rel="noopener noreferrer" className='links mb-2 mb-md-0 me-md-2'>
                    <img className="image img-fluid" src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png' alt="Play Store" />
                </a>
                <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className='links'>
                    <img className="image img-fluid" src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png' alt="App Store" />
                </a>
            </div>
        </div>
        <div className='footer2 container-fluid'>
            <div className='row'>
                <div className='col-12 col-md-3 mb-4'>
                    <h2><span className='text-danger'>Red</span> Cliff</h2>
                    <p>© 2024 Redcliff Restaurant<br /> Pvt. Ltd</p>
                    <div>
                        <h4>Connect with us</h4>
                        <hr />
                        <div className='d-flex'>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='links me-3'>
                                <FacebookIcon />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='links me-3'>
                                <XIcon />
                            </a>
                            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className='links me-3'>
                                <WhatsAppIcon />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className='links'>
                                <YouTubeIcon />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-3 mb-4 d-none d-md-block'>
                    <h3>Company</h3>
                    <Link to="/about"><p className='about1'>About</p></Link>
                    <p>Careers</p>
                    <p>Team</p>
                    <p>Swiggy One</p>
                    <p>Swiggy Instamart</p>
                    <p>Swiggy Genie</p>
                </div>
                <div className='col-12 col-md-3 mb-4 d-none d-md-block'>
                    <h3>Contact us</h3>
                    <Link to="/contactdetails"><p className='about1'>Help & Support</p></Link>
                    <p>Partner with us</p>
                    <p>Ride with us</p>
                    <div className='mt-4'>
                        <h3>Legal</h3>
                        <p>Terms & Conditions</p>
                        <p>Cookie Policy</p>
                        <p>Privacy Policy</p>
                        <p>Investor Relations</p>
                    </div>
                </div>
                <div className='col-12 col-md-3 mb-4 d-none d-md-block'>
                    <h3>We deliver to:</h3>
                    <p>Banglore</p>
                    <p>Gurgaon</p>
                    <p>Hyderabad</p>
                    <p>Delhi</p>
                    <p>Mumbai</p>
                    <p>Pune</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer