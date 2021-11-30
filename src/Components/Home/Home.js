import React from 'react';
import About from '../About/About';
import Background from '../Background/Background';
import Form from '../Form/Form';
import Skills from '../Skills/Skills';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                <Background></Background>
                <Skills></Skills>

            </div>
            <Form></Form>
        </div>
    );
};

export default Home;