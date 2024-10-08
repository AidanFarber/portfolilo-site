// import React from 'react';

interface we_props {
    company: string;
    role: string;
    start_date: string;
    end_date: string;
    description: string;
    skills: string;
}

function WorkExperienceCard(props: we_props) {
    return (
        <div className='work_exp_card' id={props.company}>
            <h2>{props.company}</h2>
            <h3>{props.role}</h3>
            <hr />
            <p className='descriptive_txt'>{props.start_date} - {props.end_date != "Ongoing" ? props.end_date : "Ongoing"}</p>

            <p className='job_description'>{props.description}</p>
            <p className='skills'>{props.skills}</p>
        </div>
    )
}

export default WorkExperienceCard;
