import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="aboutbg pt-5 pb-4 ">
            <h1>ABOUT ME</h1>
            <div className="about ms-5">
                <div data-aos="fade-down" data-aos-easing="linear"
                    data-aos-duration="1500">
                    <img className="aboutimg " src="https://www.komputronik.pl/informacje/wp-content/uploads/2020/03/jaki-laptop-do-4000.jpg" alt="" />
                </div>
                <div className="d-flex justify-content-center me-4 ms-3" data-aos="fade-up" data-aos-easing="linear"
                    data-aos-duration="1500">
                    <h6 style={{ color: "white" }} className="d-flex justify-content-center me-4 ms-3">I am a Junior Web Developer who is looking for an opportunity to work in a challenging
                        environment and grow rapidly with latest technologies and increasing responsibilities.
                    </h6>
                </div>
            </div>
        </div >
    );
};

export default About;