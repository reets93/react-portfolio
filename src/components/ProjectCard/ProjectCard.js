import React from "react";
import Wrapper from "../Wrapper/Wrapper";

function ProjectCard(props){
    return (
      <Wrapper>
        <div className="card">
  <img src={props.image} className="card-img-top" alt={props.title}/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.repo} className="btn btn-primary">Github Repository</a>
    <a href={props.deployed}>Go to live site</a>
  </div>
</div>
</Wrapper>
    )
}

export default ProjectCard;