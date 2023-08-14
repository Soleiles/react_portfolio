import React from 'react';
import ResumePDF from '../assets/PlaceHolder-Resume.pdf';
import '../styles/AboutMe.css';


export default function Resume() {
    return (   
        <>
        <div className="resume">
            <article className='resume-dl'>
                <a href={ResumePDF} download="PlaceholderResume" target='_blank' rel='noreferrer' className='btn btn-primary'>Download Resume</a>
            </article>

            <article className="list">
                <div>
                    <h3>Front-End Experience:</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>HandlebarJS</li>
                    </ul>
                </div>
                <div>
                    <h3>Back-End Experience:</h3>
                    <ul>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>API</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </article>
        </div>
        </>
    );
}