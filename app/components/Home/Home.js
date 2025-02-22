import React from 'react'
import HeaderHome from '../../Page/Common/Header'
import './Home.scss';
import Organization from './Organization';
import RoadTripPage from './RoadTripPage/RoadTripPage';
import Ecosystem from './Ecosystem/Ecosystem';
import Services from './Service/Services';
import Project from './Project/Project';
import Gift from './Gift/Gift';
import Blog from './Blog/Blog';
import Footer from '../../Page/Common/Footer';
function Home() {
    return (
        <>
            <div className='RPRJDSGINT'>
                <HeaderHome />
                <div className='CSZSHYTNLF'>
                    <video width="100%" preload playsInline autoPlay loop muted>
                        <source src="https://evotek.vn/wp-content/uploads/pexels-tea-oebel-6804109-720p.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <Organization />
            <RoadTripPage />
            <Ecosystem />
            <Services />
            <Project />
            <Gift />
            <Blog />
            <Footer />
        </>
    )
}

export default Home