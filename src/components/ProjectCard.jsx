import React from 'react';

function ProjectCard({ card: { title, image, app, repo } }) {
    return (
        <div className="card">
            <img src={image} class="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <a href={app} className="btn btn-primary">Deployed App</a>
                <a href={repo} className="btn btn-primary">Repository</a>
            </div>
        </div>
    );
}

export default ProjectCard;