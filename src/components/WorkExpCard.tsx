import React from 'react';

function WorkExperienceCard({company, role, description, skills, start_date, end_date="Ongoing"}) {
    return {
        <div className='work_exp_card' id={company}>
            <h2>{company}</h2>
            <h3>{role}</h3>
            <hr />
            <p className='descriptive_txt'>{start_date} - {end_date != "Ongoing" ? end_date : "Ongoing"}</p>

            <p className='job_description'>{description}</p>
        </div>
    }
}
