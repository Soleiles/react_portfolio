import React from 'react';
import Project from '../components/Project';
import '../styles/Portfolio.css';

export default function Portfolio({ handlePageChange }) {
    return (
        <section>
            <article className="header">
                <h1>My Projects</h1>
            </article>
            <Project handlePageChange={handlePageChange} />
        </section>
    );
}