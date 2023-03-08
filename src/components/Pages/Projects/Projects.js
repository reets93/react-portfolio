import React from 'react';
import ProjectCard from '../../ProjectCard/ProjectCard';
import projects from './projects.json';

function Projects() {
    return (
        <div>
        <ProjectCard 
        title={projects[0].title}
        image={projects[0].image}
        description={projects[0].description}
        repo={projects[0].repo}
        deplyed={projects[0].deployed}
        />
        <ProjectCard 
        title={projects[1].title}
        image={projects[1].image}
        description={projects[1].description}
        repo={projects[1].repo}
        deployed={projects[1].deployed}
        />
        </div>
    )
}

export default Projects;