import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Project from '../Project/Project';
import AOS from 'aos';

import 'aos/dist/aos.css';

const Projects = () => {
    AOS.init();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./Projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div data-aos="zoom-in" data-aos-duration="3000" id="projects">
            <h1 style={{ color: "white", }} className="pt-5 pb-4 overflow-hidden"> <h2 style={{ color: "white" }}>  <h1><u><span>PRO</span><span> JEC</span><span> TS</span></u></h1></h2></h1>

            {
                <div className="me-3 ms-2 row row-cols-1 row-cols-md-3 row-cols-lg-3 g-5 d-flex justify-content-center   ">


                    {

                        projects.map(project => <Project project={project}

                        >

                        </Project>)

                    }

                </div>
            }
        </div>
    );
};

export default Projects;