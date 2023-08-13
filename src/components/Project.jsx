import React from 'react';
import ProjectCard from './ProjectCard';
import Bookbusta from "../assets/images/bookbusta.png";
import Recipedia from "../assets/images/recipedia.png";
import NoteTaker from "../assets/images/expressjs-note-taker.png";
import CodeQuiz from "../assets/images/code-quiz.png";
import PasswordGen from "../assets/images/password-gen.png";
import Scheduler from "../assets/images/work-day-scheduler.png";

const projects = [
    {
        id: "1",
        title: "Bookbusta",
        image: Bookbusta,
        app: "https://bookbusta-950538aa625f.herokuapp.com/",
        repo: "https://github.com/Nneifem/bookbusta",
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
        title: "Express.js Note Taker",
        image: NoteTaker,
        app: "https://express-js-note-taker-project.herokuapp.com/",
        repo: "https://github.com/Soleiles/express.js-note-taker",
    },
    {
        id: "4",
        title: "Javascrupt Coding Quiz",
        image: CodeQuiz,
        app: "https://soleiles.github.io/code-quiz/",
        repo: "https://github.com/Soleiles/code-quiz",
    },
    {
        id: "5",
        title: "Password Generator",
        image: PasswordGen,
        app: "https://soleiles.github.io/Password-Generator/",
        repo: "https://github.com/Soleiles/Password-Generator",
    },
    {
        id: "6",
        title: "Work Day Scheduler",
        image: Scheduler,
        app: "https://soleiles.github.io/Work-Day_Scheduler/",
        repo: "https://github.com/Soleiles/Work-Day_Scheduler",
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