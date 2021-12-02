import React from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import './Formcard.css'

const Formcard = () => {
    AOS.init();
    return (
        <div className="overflow-hidden body"  >




            <div >
                <div data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="1500" class="box">
                    <h3>ADDRESS</h3>
                    <div >
                        <p class="third"><i style={{ fontSize: "50px" }} class="fa fa-map-marker" aria-hidden="true"></i></p>
                        <span class="third">Tejgaon, Dhaka-1215;</span>

                    </div>
                </div>

                <div data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="1700" class="box">

                    <h2>CONTACT NO</h2>
                    <div >
                        <p class="second"><i style={{ fontSize: "50px" }} class="fa fa-phone" aria-hidden="true"></i></p>
                        <span class="second">01682711156</span>

                    </div>
                </div>
                <div data-aos="fade-right" data-aos-easing="linear"
                    data-aos-duration="1800" class="box">

                    <h3>MAIL</h3>
                    <div >
                        <p class="third"><i style={{ fontSize: "50px" }} class="fa fa-envelope" aria-hidden="true"></i></p>
                        <span class="third">sadiasultana.dev@gmail.com</span>

                    </div>
                </div>




            </div>




        </div >




    );
};

export default Formcard;