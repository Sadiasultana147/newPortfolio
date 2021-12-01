import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'

const Project = (props) => {
    const { id, liveLink, gitLink, ProjectName, image1, image2, image3, image4, image5 } = props.project
    return (
        <div >
            <div class="col ">
                <div class="card  h-100">
                    <div>
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={image1} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={image2} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={image3} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={image4} class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src={image5} class="d-block w-100" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body text-center">



                        <h4 className="card-text">{ProjectName}</h4>
                        <hr style={{ border: "2px solid blue" }} />

                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 pt-5">
                            <div>
                                <a href={liveLink} target="_blank"><button className="btn-grad ">
                                    Preview
                                </button>
                                </a>
                            </div>
                            <div>
                                <Link className="link" to={`details/${id}`}><button className="btn-grad ">
                                    Details
                                </button>
                                </Link>
                            </div>
                            <div>
                                <a href={gitLink} target="_blank"><button className="btn-grad ">
                                    GITLINK
                                </button>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default Project;