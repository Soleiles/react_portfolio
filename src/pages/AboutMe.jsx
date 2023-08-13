import React from 'react';
import Portrait from '../assets/images/portrait.png';

export default function AboutMe() {
    return (
        <div>
            <article className="header">
                <h1 className="title">About Me</h1>
                <img className="portrait" src={Portrait} alt="" />
            </article>
            <article className="bio">
                <p>Hello! My name is Kevin and I am learning how to be a full stack developer! I'm currently enrolled in UPenn's coding bootcamp and am striving to make this a full time career.</p>
            </article>
        </div>
    );
}