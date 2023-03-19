import React from 'react';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from './projects.json';
import './projects.css'
import images from './projectImages'

function Projects() {
    return (<section>
        <h1 className="page-title"> Projects Gallery </h1>

        <div className='card-group'>
            <ProjectCard
                title={projects[0].title}
                image={images[0].p1}
                description={projects[0].description}
                repo={projects[0].repo}
                deployed={projects[0].deployed}
                live={projects[0].live}
            />

            <ProjectCard
                title={projects[1].title}
                image={images[1].m6}
                description={projects[1].description}
                repo={projects[1].repo}
                deployed={projects[1].deployed}
                live={projects[1].live}
            />

            <ProjectCard
                title={projects[2].title}
                image={images[2].m7}
                description={projects[2].description}
                repo={projects[2].repo}
                deployed={projects[2].deployed}
                live={projects[2].live}
            />
        </div>
        
        <div className='card-group'>
            <ProjectCard
                title={projects[3].title}
                image={images[3].m8}
                description={projects[3].description}
                repo={projects[3].repo}
                deployed={projects[3].deployed}
                live={projects[3].live}
            />
            <ProjectCard
                title={projects[4].title}
                image={images[4].m11}
                description={projects[4].description}
                repo={projects[4].repo}
                deployed={projects[4].deployed}
                live={projects[4].live}
            />
            <ProjectCard
                title={projects[5].title}
                image={images[5].m12}
                description={projects[5].description}
                repo={projects[5].repo}
                deployed={projects[5].deployed}
                live={projects[5].live}
            />
            </div>
        </section>
    )
}

export default Projects;