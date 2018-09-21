import React, { Component } from 'react';

import './Login.css';

class Login extends Component {

    render() {
        return (
            <div className="d-flex justify-content-center">
                <form className="login-form">
                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>                
                </form>
            </div>
        );
    }
}

export default Login;