import React from 'react';
// import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from './projects.json';
import './projects.css'

function Projects() {
    return (<section>
        <h1 className="page-title"> Projects Gallery </h1>

        <div className='card-group'>
            <div className="card project">
                <img src={require('../../assets/p1.png')} className="card-img-top img-container" alt={projects[0].title} />
                <div className="card-body content">
                    <h5 className="card-title">{projects[0].title}</h5>
                    <p className="card-text">{projects[0].description}</p>
                    <a href={projects[0].repo} className="btn btn-primary">Github Repository</a>
                    <a href={projects[0].deployed}>{projects[0].live}</a>
                </div>
            </div>

            <div className="card project">
                <img src={require('../../assets/m6.png')} className="card-img-top img-container" alt={projects[1].title} />
                <div className="card-body content">
                    <h5 className="card-title">{projects[1].title}</h5>
                    <p className="card-text">{projects[1].description}</p>
                    <a href={projects[1].repo} className="btn btn-primary">Github Repository</a>
                    <a href={projects[1].deployed}>{projects[1].live}</a>
                </div>
            </div>

            <div className="card project">
                <img src={require('../../assets/m7.png')} className="card-img-top img-container" alt={projects[2].title} />
                <div className="card-body content">
                    <h5 className="card-title">{projects[2].title}</h5>
                    <p className="card-text">{projects[2].description}</p>
                    <a href={projects[2].repo} className="btn btn-primary">Github Repository</a>
                    <a href={projects[2].deployed}>{projects[2].live}</a>
                </div>
            </div>

            </div>

            <div className='card-group'>
            <div className="card project">
                <img src={require('../../assets/m8.png')} className="card-img-top img-container" alt={projects[3].title} />
                <div className="card-body content">
                    <h5 className="card-title">{projects[3].title}</h5>
                    <p className="card-text">{projects[3].description}</p>
                    <a href={projects[3].repo} className="btn btn-primary">Github Repository</a>
                    <a href={projects[3].deployed}>{projects[3].live}</a>
                </div>
            </div>

            <div className="card project">
                <img src={require('../../assets/m11.png')} className="card-img-top img-container" alt={projects[4].title} />
                <div className="card-body content">
                    <h5 className="card-title">{projects[4].title}</h5>
                    <p className="card-text">{projects[4].description}</p>
                    <a href={projects[4].repo} className="btn btn-primary">Github Repository</a>
                    <a href={projects[4].deployed}>{projects[4].live}</a>
                </div>
            </div>

            <div className="card project">
                <img src={require('../../assets/m12.png')} className="card-img-top img-container" alt={projects[5].title} />
                <div className="card-body content">
                    <h5 className="card-title">{projects[5].title}</h5>
                    <p className="card-text">{projects[5].description}</p>
                    <a href={projects[5].repo} className="btn btn-primary">Github Repository</a>
                    <a href={projects[5].deployed}>{projects[5].live}</a>
                </div>
            </div>
            </div>

            {/* <ProjectCard
                title={projects[0].title}
                image={projects[0].image}
                description={projects[0].description}
                repo={projects[0].repo}
                deployed={projects[0].deployed}
                live={projects[0].live}
            />

            <ProjectCard
                title={projects[1].title}
                image={projects[1].image}
                description={projects[1].description}
                repo={projects[1].repo}
                deployed={projects[1].deployed}
                live={projects[1].live}
            />

            <ProjectCard
                title={projects[2].title}
                image={projects[2].image}
                description={projects[2].description}
                repo={projects[2].repo}
                deployed={projects[2].deployed}
                live={projects[2].live}
            />
        </div>
        <div className='card-group'>
            <ProjectCard
                title={projects[3].title}
                image={projects[3].image}
                description={projects[3].description}
                repo={projects[3].repo}
                deployed={projects[3].deployed}
                live={projects[3].live}
            />
            <ProjectCard
                title={projects[4].title}
                image={projects[4].image}
                description={projects[4].description}
                repo={projects[4].repo}
                deployed={projects[4].deployed}
                live={projects[4].live}
            />
            <ProjectCard
                title={projects[5].title}
                image={projects[5].image}
                description={projects[5].description}
                repo={projects[5].repo}
                deployed={projects[5].deployed}
                live={projects[5].live}
            /> */}
        </section>
    )
}

export default Projects;