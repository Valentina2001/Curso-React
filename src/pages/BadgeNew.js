import React from 'react'

import './styles/BadgeNew.css'
import Badge from '../componets/Badge'
import BadgeForm from '../componets/BadgeForm'
import header from '../images/badge-header.svg'
import Navbar from '../componets/Navbar'

class BadgeNew extends React.Component{
    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    }};

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    render(){
        return (
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                            firstName ={this.state.form.firstName}
                            lastName ={this.state.form.lastName}
                            twitter ={this.state.form.twitter}
                            jobTitle ={this.state.form.jobTitle}
                            email={this.state.form.email}
                            avatarUrl ="https://es.gravatar.com/userimage/174644536/9bd68354cc8a429b6aa6b3a601957152.png"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form}/>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}

export default BadgeNew