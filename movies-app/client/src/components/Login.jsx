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
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    
    render(){
        return(
            <div className="loginForm">
                <form onSubmit={(e)=>this.props.handleSubmit(e, this.state.username, this.state.password)}>
                    <input type="text" required="true" name="username" placeholder="username" value={this.state.username} onChange={this.handleInputChange}/>
                    <input type="password" required="true" name="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange}/>
                    <input type="submit" value="LogIn" onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default Login;