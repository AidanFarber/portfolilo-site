interface proj_props {
    project_name: string;
    tech: string;
}

function ProjectCard(props: proj_props) {
    return (
        <div className='project-card'>
            <h2 className='project-title' id={props.project_name}></h2>
            <hr />
            <p className='project-desc' id={props.project_name + "-desc"}></p>
            <p id='langs'>Tools Used:</p>
        </div>
    )
}

export default ProjectCard;
