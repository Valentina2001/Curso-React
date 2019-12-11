import React from 'react'

import './styles/BadgeDetails.css'
import confLogo from '../images/platziconf-logo.svg'
import { Link } from 'react-router-dom'
import Badge from '../componets/Badge'

function BadgeDetails(props){
    const badge = props.badge
    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la Conferencia"></img>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge 
                            firstName={badge.firstName} 
                            lastName={badge.lastName} 
                            email={badge.email} 
                            twitter={badge.twitter} 
                            jobTitle={badge.jobTitle}
                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <div><Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}/> Edit</div>
                            </div>

                            <div>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails