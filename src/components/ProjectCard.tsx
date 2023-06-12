interface Props {
    title: string;
    description: string;
    techStack: string;
    link: string;
}

function ProjectCard({ title, description, techStack, link }: Props) {
    let classTitle = title.replace(/ /g, '-').toLowerCase();
    return (
    <div className={"project-card " + classTitle}>
         <h2>{title}</h2> 
         <p className="p-description">{description}</p>
         <p id='techStack'>Languages/Frameworks used: {techStack}</p>
         
         {link !== '' && <a target="_blank" href={link}>See project on GitHub!</a>}
    </div>
    );
}

export default ProjectCard;
