import React from 'react'

import './styles/BadgeEdit.css'
import Badge from '../componets/Badge'
import BadgeForm from '../componets/BadgeForm'
import header from '../images/platziconf-logo.svg'
import PageLoading from '../componets/PageLoading'
import api from '../api'

class BadgeEdit extends React.Component{
    state = { 
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        }    
    };

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async e =>{
        this.setState({ loading: true, error: null})

        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )

            this.setState({ loading: false, form: data})

        } catch (error){
            this.setState({ loading: false, error: error})
        }
    }

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
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({ loading: false })

            this.props.history.push('/badges')
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
                <div className="BadgeEdit__hero">
                    <img 
                    className="BadgeEdit__hero-image img-fluid" 
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
                            <h1>Edit Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>  
        );
    }
}

export default BadgeEdit