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
        <div style={{ backgroundColor: "purple" }}>
            <div>
                <Header></Header>
            </div>
            <div className="pb-5">
                <img className="w-50" src={Project?.image1} alt="" />
                <h3>{Project?.ProjectName}</h3>
                <h6>{Project?.features}</h6>
            </div>
        </div>
    );
};

export default ProjectDetails;