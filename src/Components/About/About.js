import React from 'react';
import Header from '../Header/Header';
import image from '../../../src/images/images-modified.png'
import './About.css'

const About = () => {
    return (
        <div className="aboutbg pt-5 pb-4 overflow-hidden ">
            <Header></Header>
            <h1>ABOUT ME</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-1 pt-5">
                <div data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="1500">
                    <img src={image} className="w-50 " alt="" />
                </div>
                <div className="d-flex justify-content-center align-items-center  " data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="1500">
                    <h6 style={{ color: "white" }} className="d-flex justify-content-center align-items-center  me-4 ms-3">I am a Junior Web Developer who is looking for an opportunity to work in a challenging
                        environment and grow rapidly with latest technologies and increasing responsibilities.
                    </h6>
                </div>
            </div>
        </div>

    );
};

export default About;