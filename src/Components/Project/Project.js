import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'

const Project = (props) => {
    const { id, ProjectName, image1, features } = props.project
    return (
        <div >
            <div >
                <div className="col h-100">
                    <div className="cardbox w-100 card h-100">
                        <div>
                            <img src={image1} alt="" className=" w-100 p-5" />
                        </div>
                        <div className="card-body text-center">
                            <h4 className="card-text">{ProjectName}</h4>
                            <hr style={{ border: "2px solid blue" }} />

                            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 pt-5">
                                <div>
                                    <a href="https://apartmentsales-2e5d4.web.app/" target="_blank"><button className="btn-grad ">
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
                                    <a href="https://github.com/Sadiasultana147/ApartmentSales-Client-Side" target="_blank"><button className="btn-grad ">
                                        GITLINK
                                    </button>
                                    </a>
                                </div>
                            </div>


                        </div>


                    </div>

                </div>
            </div>
        </div>

    );
};

export default Project;