import React from 'react';
import About from '../About/About';
import Background from '../Background/Background';
import Form from '../Form/Form';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './Home.css'

const Home = () => {
    return (
        <div className="overflow-hidden body">
            <div className="overflow-hidden">
                <Background></Background>
                <Skills></Skills>

                <div style={{ backgroundColor: "#695E93" }} >
                    <Projects></Projects>
                </div>

            </div>
            <Form></Form>
        </div>
    );
};

export default Home;