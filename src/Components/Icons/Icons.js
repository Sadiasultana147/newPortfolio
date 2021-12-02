import React from 'react';
import './Icon.css'

const Icons = () => {
    return (
        <div>
            <div class="container">

                <div class="social-buttons">

                    <a href="http://www.facebook.com" target="blank" class="social-margin">
                        <div class="social-icon facebook">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </div>
                    </a>



                    <a href="http://linkedin.com/" class="social-margin" target="blank">
                        <div class="social-icon linkedin">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </div>
                    </a>

                    <a href="https://github.com/" target="blank" class="social-margin">
                        <div class="social-icon github">
                            <i class="fa fa-github-alt" aria-hidden="true"></i>
                        </div>
                    </a>







                    <a href="http://google.com/" target="blank" class="social-margin">
                        <div class="social-icon twitter">
                            <i class="fa fa-google" aria-hidden="true"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Icons;