import React from 'react'
import BannerBackground from "../Images/background-image1.jpeg"
import Chef from './Chef'
import { FiArrowRight } from 'react-icons/fi'
import Navbar from '../Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Menu from './Menu';
import ExploreMenu from '../Components/ExploreMenu'
import Footer from './Footer'
import Custumer from './Custumer'
import TableReserve from './TableReserve'
import Menubuttons from './Menubuttons'
import Buttons from './Buttons'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-container container-fluid'>
      <Navbar />
      <div className='home-banner-container row'>
        <div className='home-bannerImage-container col-12'>
          {/*<img src={"https://tse2.mm.bing.net/th?id=OIP.p9SP3Xf63P2fE2xlbnVXtwHaEo&pid=Api&P=0&h=180"} alt="Banner" className="img-fluid" />*/}
        </div>
        <div className='home-text-section col-md-6'>
          <h1 className='primary-heading'>
            Delicious Food For You ❤️
          </h1>
          <p className='primary-text'>
            Fresh Food is Waiting For You
          </p>
          <div className='d-flex flex-wrap justify-content-center justify-content-md-start'>
            <Link to={"/fooddetails"} className="mb-2 mb-md-0 me-md-2">
              <button className='secondary-button'>Order Now <FiArrowRight/></button>
            </Link>
            <Link to={"/menubuttons1"} className="mb-2 mb-md-0 me-md-2">
              <button className='secondary-button'>For Veg</button>
            </Link>
            <Link to={"/menubuttons2"} className="mb-2 mb-md-0">
              <button className='secondary-button'>For Non-Veg</button>
            </Link>
          </div>
        </div>
        <div className='home-image-container col-md-6 mt-3 mt-md-0 d-flex justify-content-center align-items-center'>
          <div className='rounded-circle overflow-hidden' style={{width: '80%', paddingBottom: '80%', position: 'relative'}}>
            <img src={"https://wallpapercave.com/wp/wp9465718.jpg"} alt="Food" className="img-fluid position-absolute" style={{top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
        </div>
      </div>
      <ExploreMenu />
      <Menu />
      <TableReserve />
      <div className='mt-4'>
        <Chef />
      </div>
      <Custumer />
      <Footer />
    </div>
  )
}

export default Home