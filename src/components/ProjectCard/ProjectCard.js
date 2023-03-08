import React from "react";
import '../ProjectCard/projectcard.css'

function ProjectCard(props) {
  return (
    <div className="card">
      <img src={props.image} className="card-img-top img-container" alt={props.title} />
      <div className="card-body content">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.repo} className="btn btn-primary">Github Repository</a>
        <a href={props.deployed}>{props.live}</a>
      </div>
    </div>
  )
}

export default ProjectCard;