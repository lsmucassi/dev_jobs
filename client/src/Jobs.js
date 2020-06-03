import React from 'react'
import Typography from '@material-ui/core/Typography'

import Job from './Job'

export default function ({jobs}) {
    return (
        <div className="jobs-list">
            <Typography variant="h1">
                Entry level Software Jobs
            </Typography>
            {
                jobs.map(
                    job => <Job job={job} /> 
                )
            }
        </div>
    )
}