import React from 'react'

import './styles/BadgeNew.css'
import Badge from '../componets/Badge'
import BadgeForm from '../componets/BadgeForm'
import header from '../images/platziconf-logo.svg'
import PageLoading from '../componets/PageLoading'
import api from '../api'

class BadgeNew extends React.Component{
    state = { 
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }    
    };

    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null })

        try{
            await api.badges.create(this.state.form)
            this.setState({ loading: false })
        }catch (error){
            this.setState({ loading: false, error: error})
        }
    }
    render(){
        if(this.state.loading){
            return <PageLoading />
        }
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img 
                    className="BadgeNew__hero-image img-fluid" 
                    src={header} 
                    alt="Logo"
                    />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                            firstName ={this.state.form.firstName || 'FIRT_NAME'}
                            lastName ={this.state.form.lastName || 'LAST_NAME'}
                            twitter ={this.state.form.twitter || 'Twitter'}
                            jobTitle ={this.state.form.jobTitle || 'JOB_TITLE'}
                            email={this.state.form.email || 'EMAIL'}
                            avatarUrl ="https://es.gravatar.com/userimage/174644536/9bd68354cc8a429b6aa6b3a601957152.png"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                            onChange={this.handleChange} 
                            onSubmit={this.handleSubmit}
                            formValues={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>  
        );
    }
}

export default BadgeNew