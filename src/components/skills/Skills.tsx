import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const Skills = () => {
    return (
        <>
            <div className="skills-container">
                <h2>Skills</h2>
                <div className="skills-content">
                    <aside className="skill-list">
                        <h3>Technical</h3>
                        <ul>
                            <li>JavaScript/TypeScript</li>
                            <li>React</li>
                            <li>GatsbyJS</li>
                            <li>Next.js</li>
                            <li>Jest</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>TailwindCSS</li>
                            <li>Node.js</li>
                        </ul>
                    </aside>
                    <span className="skills-span">X</span>
                    <aside className="skill-list">
                        <h3>Soft</h3>
                        <ul>
                            <li>Clear Communication</li>
                            <li>Time Management</li>
                            <li>Attention to detail</li>
                            <li>Problem Solving</li>
                            <li>Creativity</li>
                            <li>Leadership</li>
                            <li>Adaptive Learning</li>
                        </ul>
                    </aside>
                </div>
            </div>
            <StaticImage src="../../images/abstract-building.webp"
                alt="Testimonials"
                style={{
                    width: '100%',
                    height: '571px',
                    top: 0,
                    left: 0,
                    objectFit: 'cover',
                    objectPosition: '50% 50%',
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    verticalAlign: '100%'
                }} />
        </>
    );
};
