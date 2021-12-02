import React from 'react';
import me from "../../../src/images/me.jpg";
import TypeAnimation from 'react-type-animation';

import './Background.css'
import Header from '../Header/Header';
import Icons from '../Icons/Icons';


const Background = () => {
    return (
        <div className="overflow-hidden">
            <div class="wrapper overflow-hidden  ">
                <Header></Header>

                <div>


                    <div class="patterns">
                        <svg width="100%" height="100%">
                            <defs>
                                <pattern id="polka-dots" x="0" y="0" width="100" height="100"
                                    patternUnits="userSpaceOnUse">
                                    <circle fill="#be9ddf" cx="25" cy="25" r="3"></circle>
                                </pattern>
                                <style>
                                    @import url("https://fonts.googleapis.com/css?  family=Lora:400,400i,700,700i");
                                </style>

                            </defs>

                            <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>



                            <text x="50%" y="60%" text-anchor="middle"  >
                                WELCOME TO MY PORTFOLIO
                            </text>


                        </svg>
                    </div>

                    <h3 style={{ color: "white" }}>Hi ! <span style={{ color: " cyan" }}>I'm SADIA SULTANA</span></h3>


                    <TypeAnimation

                        cursor={true}
                        sequence={[
                            'Front-End Developer',
                            2000,
                            'WEB Developer',
                            2000,
                            'JS Developer',
                            2000,
                            'React Developer',
                            2000,
                        ]}
                        wrapper="h2"
                        repeat={Infinity}
                    />
                    <Icons></Icons>
                </div>



                <div class="boxes">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </div>
    );
};

export default Background;