import React, { Component } from 'react';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        }
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    
    render(){
        return(
            <div className="registerForm">
                <form onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state.username, this.state.password, this.state.email)}>
                    <input type="text" required="true" name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange}/>
                    <input type="password" required="true" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange}/>
                    <input type="email" required="true" name="email" placeholder="email" value={this.state.email} onChange={this.handleInputChange}/>
                    <input type="submit" value="LogIn" onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default Register;