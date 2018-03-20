import React, {Component} from 'react';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            userName: '',
            password: ''
        }
    }

    handleUserNameChange(val){
        this.setState({userName: val});
    }
    handlePasswordChange(val){
        this.setState({password: val})
    }
    alerter(){
        alert(`Username: ${this.state.userName} Password: ${this.state.password}`);
    }


    render(){
        return(
            <div>
                <input placeholder="Username" onChange={(e) => this.handleUserNameChange(e.target.value)} type="text"/>
                <input placeholder="Password" onChange={(e) => this.handlePasswordChange(e.target.value)} type="text"/>
                <button onClick={() => this.alerter()}>Login</button>
            </div>
        )
    }
}

export default Login;