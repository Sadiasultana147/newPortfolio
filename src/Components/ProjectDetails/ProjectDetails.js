import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../Components/Header/Header'

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [projects, setProject] = useState([]);

    useEffect(() => {

        fetch('/Projects.json')
            .then(res => res.json())
            .then(data => setProject(data))
    }, []);



    const Project = projects.find(project => (project.id == projectId))
    return (
        < div className="wrapper"  >
            <div>
                <Header></Header>
            </div>


            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-1 pt-5">
                <div><h1 style={{ color: "white" }}><u>Features</u></h1>
                    <h3 style={{ color: "white" }}>• {Project?.features.slice(0, 30)}</h3>
                    <h3 style={{ color: "white" }} className="ms-5">• {Project?.features.slice(31, 70)}</h3>
                    <h3 style={{ color: "white" }} className="ms-5">• {Project?.features.slice(71, 142)}</h3>
                </div>
                <div >
                    <div className="me-3 pe-5 pb-5" >
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img className=" d-block w-100 h-100 d-flex justify-content-center" src={Project?.image1} alt="..." />

                                </div>
                                <div class="carousel-item">
                                    <img src={Project?.image2} class="d-block w-100 h-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={Project?.image3} class="d-block w-100 h-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={Project?.image4} class="d-block w-100 h-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={Project?.image5} class="d-block w-100 h-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
        </div >
    );
};

export default ProjectDetails;