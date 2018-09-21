import React, { Component } from 'react';

class Register extends Component {

    render() {
        return(
            <div className="d-flex justify-content-center">
                <form className="login-form">
                    <div className="form-group">
                        <input type="user" className="form-control" id="exampleInputUsername1" aria-describedby="userHelp" placeholder="Username"/>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-primary d-flex justify-content-end">Submit</button>
                    </div>
                </form>
            </div>        
        );
    }
}

export default Register;