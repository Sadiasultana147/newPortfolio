import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('./Projects.Json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div id="projects">
            <h1>PROJECTS</h1>
            {
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-5 d-flex justify-content-center mb-5 pb-5  ">


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