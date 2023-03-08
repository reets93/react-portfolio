import React from 'react';
import ProjectCard from '../../ProjectCard/ProjectCard';
import projects from './projects.json';
import './projects.css'

function Projects() {
    return (<section>
        <div className='card-group'>
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

            <ProjectCard
                title={projects[2].title}
                image={projects[2].image}
                description={projects[2].description}
                repo={projects[2].repo}
                deployed={projects[2].deployed}
            />
</div>
<div className='card-group'>
            <ProjectCard
                title={projects[3].title}
                image={projects[3].image}
                description={projects[3].description}
                repo={projects[3].repo}
                deployed={projects[3].deployed}
            />
            <ProjectCard
                title={projects[4].title}
                image={projects[4].image}
                description={projects[4].description}
                repo={projects[4].repo}
                deployed={projects[4].deployed}
            />
            <ProjectCard
                title={projects[5].title}
                image={projects[5].image}
                description={projects[5].description}
                repo={projects[5].repo}
                deployed={projects[5].deployed}
            />
        </div></section>
    )
}

export default Projects;