import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: "Project One",
    description: "This is a description for Project One.",
    image: "/image/recip.jpg",
    deployLink: "https://deploy-link-one.com",
    githubLink: "https://github.com/user/project-one",
  },
  {
    id: 2,
    name: "Project Two",
    description: "This is a description for Project Two.",
    image: "/image/recip.jpg",
    deployLink: "https://deploy-link-two.com",
    githubLink: "https://github.com/user/project-two",
  },
  {
    id: 3,
    name: "Project Three",
    description: "This is a description for Project Three. ",
    image: "/image/recip.jpg",
    deployLink: "https://deploy-link-three.com",
    githubLink: "https://github.com/user/project-three",
  },
  {
    id: 4,
    name: "Project Four",
    description: "This is a description for Project Four.",
    image: "/image/recip.jpg",
    deployLink: "https://deploy-link-four.com",
    githubLink: "https://github.com/user/project-four",
  },
];

const Projects = () => {
  return (
    <>
    <div id="myp">

   
    <div className="my-con">
      <h1 id='my-head'>Projects</h1>
    <div className="projects-page">
      <div className="projects-container">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="buttons">
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer">
                <button className='p-btn'>View Deploy</button>
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <button className='p-btn'>View Code</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default Projects;

