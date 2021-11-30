import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import './Form.css'
import 'aos/dist/aos.css';


const Form = () => {
    AOS.init();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_gizewjf', form.current, 'user_zKdtASvBZtf6rhLXKYjUQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div id="form" data-aos="fade-down" data-aos-easing="linear"
            data-aos-duration="1500"

            className="contact">
            <h2 className="pt-4" style={{ color: "white" }}>CONTACT WITH ME</h2>
            <div class="container py-4 ">


                <form ref={form} onSubmit={sendEmail} id="contactForm" >

                    <div class="mb-3">

                        <input style={{ borderRadius: "10px" }} class="form-control " name="subject" type="text" placeholder="Subject" />

                    </div>
                    <div class="mb-3">

                        <input style={{ borderRadius: "10px" }} class="form-control" name="name" type="text" placeholder="Name" />
                        {/* <div class="invalid-feedback" data-sb-feedback="name:required">Name is required.</div> */}
                    </div>


                    <div class="mb-3">

                        <input style={{ borderRadius: "10px" }} class="form-control" type="email" name="email" placeholder="Email Address" data-sb-validations="required, email" />
                        {/* <div class="invalid-feedback" data-sb-feedback="emailAddress:required">Email Address is required.</div> */}

                    </div>


                    <div style={{ borderRadius: "10px" }} class="mb-3">

                        <textarea class="form-control" type="text" name="message" placeholder="Message" style={{ height: "10rem" }} ></textarea>
                        {/* <div class="invalid-feedback" data-sb-feedback="message:required">Message is required.</div> */}
                    </div>


                    {/* <div style={{ borderRadius: "10px" }} class="d-none" id="submitSuccessMessage">
                        <div class="text-center mb-3">Form submission successful!</div>
                    </div>


                    <div class="d-none" id="submitErrorMessage">
                        <div class="text-center text-danger mb-3">Error sending message!</div>
                    </div> */}


                    <div style={{ borderRadius: "10px" }} class="d-grid">
                        <button class="btn btn-primary btn-lg " id="submitButton" type="submit">Submit</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Form;