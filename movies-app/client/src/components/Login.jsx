import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInputChange = (e) => {

    }
    
    render(){
        return(
            <div className="loginForm">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" placeholder="username" onChange={this.handleInputChange}/>
                    <input type="password" name="password" placeholder="password" onChange={this.handleInputChange}/>
                    <input type="submit" value="submit" onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default Login;