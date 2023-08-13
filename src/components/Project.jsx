import React from 'react';
import ProjectCard from './ProjectCard';
import Recipedia from "../assets/images/recipedia.png";


const projects = [
    {
        id: "1",
        title: "Recipedia",
        image: Recipedia,
        app: "https://ruggerheist.github.io/recipedia/",
        repo: "https://github.com/ruggerheist/recipedia",
    },
    {
        id: "2",
        title: "Recipedia",
        image: Recipedia,
        app: "https://ruggerheist.github.io/recipedia/",
        repo: "https://github.com/ruggerheist/recipedia",
    },
    {
        id: "3",
        title: "Recipedia",
        image: Recipedia,
        app: "https://ruggerheist.github.io/recipedia/",
        repo: "https://github.com/ruggerheist/recipedia",
    },
    {
        id: "4",
        title: "Recipedia",
        image: Recipedia,
        app: "https://ruggerheist.github.io/recipedia/",
        repo: "https://github.com/ruggerheist/recipedia",
    },
    {
        id: "5",
        title: "Recipedia",
        image: Recipedia,
        app: "https://ruggerheist.github.io/recipedia/",
        repo: "https://github.com/ruggerheist/recipedia",
    },
    {
        id: "6",
        title: "Recipedia",
        image: Recipedia,
        app: "https://ruggerheist.github.io/recipedia/",
        repo: "https://github.com/ruggerheist/recipedia",
    },
];

function Project() {
    return (
        <div className="project-card">
            {projects.map((card) => (
                <ProjectCard key={card.id} card={card} />
            ))}
        </div>
    );
}


export default Project;