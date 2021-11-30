import React from 'react';
import classnames from "classnames"
import { loginRequest } from '../../actions/loginAction'
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

class LoginForm extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errors: {},
            isLoading: false
        }
    }
   
    isValid = () => {
        return true;
    }
    onSubmit = (e) =>{
        e.preventDefault();
        console.log('发送前'+this.state); 
        this.props.loginRequest(this.state).then(
         (res) =>{
             console.log('成功')
             this.props.history.push("/chat")
         },
         (err) =>{
            console.log('失败'+err);
         }

        );
        
        console.log('发送后'+this.state); 
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render(){
        return(
            
            <form onSubmit={this.onSubmit}>
            <h1>Login</h1>
       
            <div className="form-group">
                <label className="control-label">Username</label>
                <input
                    value={this.state.username}
                    onChange={this.onChange}
                    type="text"
                    name="username"
                    className={classnames('form-control')}
                />
            
            </div>

            <div className="form-group">
                <label className="control-label">Password</label>
                <input
                    value={this.state.password}
                    onChange={this.onChange}
                    type="text"
                    name="password"
                    className={classnames('form-control')}
                />

            </div>

            <div className="form-group">
                <button  className="btn btn-primary btn-lg">Login</button>
            </div>
            <div className="form-group">
                <button  className="btn btn-primary btn-lg">test</button>
            </div>
        </form>
        );
    }

}


export default withRouter(connect(null, { loginRequest })(LoginForm))